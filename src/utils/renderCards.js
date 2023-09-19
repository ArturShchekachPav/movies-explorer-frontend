import MoviesCard from '../components/MoviesCard/MoviesCard';

function renderCards(moviesArr, handleDeleteMovieCard, handleSaveMovieCard) {
	return moviesArr.map((movie) => {
		return <MoviesCard
			movieData={movie}
			key={movie.movieId}
			onDelete={handleDeleteMovieCard}
			onSave={handleSaveMovieCard}
		/>;
	})
}

export default renderCards;