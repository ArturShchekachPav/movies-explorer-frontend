import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';

export function SavedMovies({onSidebarClose, savedMovies, onMovieDelete}) {
	
	return (
		<div className="saved-movies">
			<Header onSidebarClose={onSidebarClose}/>
			<main className="saved-movies__main">
				<SearchForm/>
				<MoviesCardList>
					{savedMovies.map((movie) => <MoviesCard
						movieData={movie}
						savedStatus={true}
						savedId={movie._id}
						key={movie.movieId}
						onDelete={onMovieDelete}
						/>)}
				</MoviesCardList>
			</main>
			<Footer/>
		</div>
	);
}

export default SavedMovies;