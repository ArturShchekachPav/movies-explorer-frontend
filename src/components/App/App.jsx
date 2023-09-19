import './App.css';
import {
	Routes,
	Route,
	useNavigate,
	Navigate
} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import {
	useState,
	useEffect
} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [savedMovies, setSavedMovies] = useState([]);
	const [isProfileEditing, setIsProfileEditing] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [updateStatus, setUpdateStatus] = useState({})
	
	const navigate = useNavigate();
	
	const getProfileInfo = () => {
		return Promise.all([mainApi.getProfileData(),
			mainApi.getMovies()
		])
			.then(([userData, movies]) => {
				setCurrentUser(userData);
				setIsLoggedIn(true);
				
				const userMovies = movies.filter(movie => movie.owner === userData._id);
				setSavedMovies(userMovies);
			})
			.catch(err => {
				setIsLoggedIn(false);
				return Promise.reject(err);
			});
	};
	
	const handleTokenCheck = () => {
		getProfileInfo()
			.catch((err) => console.log(err));
	};
	
	useEffect(handleTokenCheck,
		[]
	);
	
	const handleDeleteMovieCard = (movieId) => {
		return mainApi.deleteMovie(movieId)
			.then(() => {
				setSavedMovies((state) => state.filter((movie) => movie._id !== movieId));
			})
			.catch(err => console.log(err));
	};
	
	const handleSaveMovieCard = (movieData) => {
		return mainApi.createMovie(movieData)
			.then(newMovie => {
				setSavedMovies([newMovie,
					...savedMovies
				]);
			})
			.catch(err => console.log(err));
	};
	
	function handleProfileDataUpdate({
		email,
		name
	}) {
		setIsLoading(true);
		
		mainApi.editProfileData(name,
			email
		)
			.then((newUserData) => {
				setCurrentUser(newUserData);
			})
			.then(() => {
				setIsProfileEditing(false);
				setUpdateStatus({show:true, success: true, message: 'Данные обновлены'})
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false));
	}
	
	function handleSingOut() {
		mainApi.logout()
			.then(() => {
				setIsLoggedIn(false);
				navigate('/',
					{replace: true}
				);
				localStorage.clear();
			})
			.catch(err => {
				console.log(err);
			});
		
	}
	
	if (isLoggedIn === null) {
		return (
			<div className="app">
				<main className="app__preloader-container">
					<Preloader/>
				</main>
			</div>
		);
	}
	
	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="app">
				<Routes>
					<Route
						a
						path="/sing-up"
						element={isLoggedIn ?
							<Navigate
								to="/"
								replace={true}
							/> :
							<Register
								isLoading={isLoading}
								setIsLoading={setIsLoading}
								getProfileInfo={getProfileInfo}
							/>}
					/>
					<Route
						path="/sing-in"
						element={isLoggedIn ?
							<Navigate
								to="/"
								replace={true}
							/> :
							<Login
								getProfileInfo={getProfileInfo}
								isLoading={isLoading}
								setIsLoading={setIsLoading}
							/>}
					/>
					<Route
						path="/movies"
						element={<ProtectedRoute
							element={
								<Movies
									savedMovies={savedMovies}
									moviesCardsMethods={{
										handleDeleteMovieCard,
										handleSaveMovieCard
									}}
									isLoading={isLoading}
									setIsLoading={setIsLoading}
								>
									<Header
										onSidebarClose={setIsSidebarOpen}
										isLoggedIn={true}
									/>
								</Movies>
							}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/saved-movies"
						element={<ProtectedRoute
							element={
								<SavedMovies
									savedMovies={savedMovies}
									onMovieDelete={handleDeleteMovieCard}
									isLoading={isLoading}
								>
									<Header
										onSidebarClose={setIsSidebarOpen}
										isLoggedIn={true}
									/>
								</SavedMovies>
							}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/profile"
						element={<ProtectedRoute
							element={
								<Profile
									onSubmit={handleProfileDataUpdate}
									isEditing={isProfileEditing}
									setIsEditing={setIsProfileEditing}
									logOut={handleSingOut}
									isLoading={isLoading}
									updateStatus={updateStatus}
								>
									<Header
										onSidebarClose={setIsSidebarOpen}
										isLoggedIn={true}
									/>
								</Profile>
							}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/"
						element={
							<Main>
								<Header
									onSidebarClose={setIsSidebarOpen}
									isLoggedIn={isLoggedIn}
								/>
							</Main>}
					/>
					<Route
						path="/*"
						element={<NotFound/>}
					/>
				</Routes>
				<Sidebar
					isOpen={isSidebarOpen}
					onClose={setIsSidebarOpen}
				/>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;