import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/sing-up' element={<Register />} />
        <Route path='/sing-in' element={<Login />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Main />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
