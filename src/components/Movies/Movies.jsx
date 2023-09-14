import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import {
	useEffect,
	useState
} from 'react';
import main from '../Main/Main';

export function Movies({onSidebarClose, savedMovies, onSaveMovie, onMovieDelete}) {
	const [moviesList, setMoviesList] = useState([]);
	
	
	useEffect(() => {
			const lastFoundMovies = JSON.parse(localStorage.getItem('foundMovies'));
			
			if(lastFoundMovies?.length) {
				setMoviesList(lastFoundMovies);
			}
		},
		[]
	);
	return (
		<div className="movies">
			<Header onSidebarClose={onSidebarClose}/>
			<main className="movies__main">
				<SearchForm setMoviesList={setMoviesList}/>
				<MoviesCardList possibleMore={true}>
					{moviesList?.length ?
						moviesList.map(({
							director,
							country,
							duration,
							year,
							description,
							image,
							trailerLink,
							id,
							nameRU,
							nameEN
						}) => {
							const savedId = savedMovies?.find((savedMovie) => savedMovie.movieId === id)?._id;
							console.log(savedId);
							
							return <MoviesCard
								movieData={{
									country,
									director,
									duration,
									year,
									description,
									image: `https://api.nomoreparties.co/${image.url}`,
									trailerLink,
									thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
									movieId: id,
									nameRU,
									nameEN
								}}
								key={id}
								savedStatus={Boolean(savedId)}
								savedId={savedId}
								onDelete={onMovieDelete}
								onSave={onSaveMovie}
							/>
						}) : <h1>Not found</h1>}
				</MoviesCardList>
			</main>
			<Footer/>
		</div>
	);
}

export default Movies;