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
	
	const navigate = useNavigate();
	
	const handleTokenCheck = () => {
		Promise.all([mainApi.getProfileData(), mainApi.getMovies()])
			.then(([userData, movies]) => {
				setCurrentUser(userData);
				setIsLoggedIn(true);
				setSavedMovies(movies);
				navigate('/movies',
					{replace: true}
				);
			})
			.catch(err => {
				console.log(err);
			});
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
	}
	
	const handleSaveMovieCard = (movieData) => {
		return mainApi.createMovie(movieData)
			.then(newMovie => {
				setSavedMovies([newMovie, ...savedMovies]);
			})
			.catch(err => console.log(err));
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
						element={<Login handleTokenCheck={handleTokenCheck}/>}
					/>
					<Route
						path="/movies"
						element={<ProtectedRoute
							element={<Movies onSidebarClose={setIsSidebarOpen} savedMovies={savedMovies} onMovieDelete={handleDeleteMovieCard} onSaveMovie={handleSaveMovieCard}/>}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/saved-movies"
						element={<ProtectedRoute
							element={<SavedMovies onSidebarClose={setIsSidebarOpen} savedMovies={savedMovies}  onMovieDelete={handleDeleteMovieCard}/>}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/profile"
						element={<ProtectedRoute
							element={<Profile
								onSidebarClose={setIsSidebarOpen}
								setUserData={setCurrentUser}
							/>}
							isLoggedIn={isLoggedIn}
						/>}
					/>
					<Route
						path="/"
						element={<Main onSidebarClose={setIsSidebarOpen}/>}
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