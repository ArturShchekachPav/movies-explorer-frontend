import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import renderCards from '../../utils/renderCards';

function MoviesCardList({
	moviesMethods: {
		handleDeleteMovieCard,
		handleSaveMovieCard
	},
	moviesList,
	children,
	apiError
}) {
	
	if(apiError) {
		return (<section className="moviescardlist">
			<h2 className="moviescardlist__title">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз</h2>
		</section>);
	}
	
	if (!moviesList?.length) {
		return (<section className="moviescardlist">
			<h2 className="moviescardlist__title">Ничего не найдено</h2>
		</section>);
	}
	
	return (
		<section className="moviescardlist">
			<ul className="container moviescardlist__list">
				{renderCards(moviesList, handleDeleteMovieCard, handleSaveMovieCard)}
			</ul>
			{children}
		</section>
	);
}

export default MoviesCardList;