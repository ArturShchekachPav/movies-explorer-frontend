import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import {useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className="app">
      <Routes>
        <Route path='/sing-up' element={<Register />} />
        <Route path='/sing-in' element={<Login />} />
        <Route path='/movies' element={<Movies onSidebarClose={setIsSidebarOpen} />} />
        <Route path='/saved-movies' element={<SavedMovies onSidebarClose={setIsSidebarOpen} />} />
        <Route path='/profile' element={<Profile onSidebarClose={setIsSidebarOpen} />} />
        <Route path='/' element={<Main onSidebarClose={setIsSidebarOpen} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Sidebar isOpen={isSidebarOpen} onClose={setIsSidebarOpen} />
    </div>
  );
}

export default App;
