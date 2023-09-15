import './App.css';
import {
	Routes,
	Route,
	useNavigate
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

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [savedMovies, setSavedMovies] = useState([]);
	const [isProfileEditing, setIsProfileEditing] = useState(false);
	
	const navigate = useNavigate();
	
	const getProfileData = () => {
		return Promise.all([mainApi.getProfileData(),
			mainApi.getMovies()
		])
			.then(([userData, movies]) => {
				setCurrentUser(userData);
				setIsLoggedIn(true);
				setSavedMovies(movies);
			})
			.catch(err => {
				console.log(err);
			});
	}
	
	const handleTokenCheck = () => {
		getProfileData();
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
		mainApi.editProfileData(name,
			email
		)
			.then((newUserData) => {
				setCurrentUser(newUserData);
			})
			.then(() => setIsProfileEditing(false))
			.catch(err => console.log(err));
	}
	
	function handleSingOut() {
		mainApi.logout()
			.then(() => {
				setIsLoggedIn(false);
				navigate('/sing-in',
					{replace: true}
				);
			})
			.catch(err => {
				console.log(err);
			});
		
	}
	
	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="app">
				<Routes>
					<Route
						path="/sing-up"
						element={<Register/>}
					/>
					<Route
						path="/sing-in"
						element={<Login getProfileData={getProfileData} isLoggedIn={isLoggedIn}/>}
					/>
					<Route
						path="/movies"
						element={<ProtectedRoute
							element={<Movies
								onSidebarClose={setIsSidebarOpen}
								savedMovies={savedMovies}
								onMovieDelete={handleDeleteMovieCard}
								onSaveMovie={handleSaveMovieCard}
							/>}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/saved-movies"
						element={<ProtectedRoute
							element={<SavedMovies
								onSidebarClose={setIsSidebarOpen}
								savedMovies={savedMovies}
								onMovieDelete={handleDeleteMovieCard}
							/>}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/profile"
						element={<ProtectedRoute
							element={<Profile
								onSidebarClose={setIsSidebarOpen}
								onSubmit={handleProfileDataUpdate}
								isEditing={isProfileEditing}
								setIsEditing={setIsProfileEditing}
								logOut={handleSingOut}
							/>}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/"
						element={<Main
							onSidebarClose={setIsSidebarOpen}
							isLoggedIn={isLoggedIn}
						/>}
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