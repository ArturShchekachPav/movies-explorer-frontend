import './MoviesCard.css';
import {useLocation} from 'react-router-dom';

function MoviesCard({
	movieData,
	savedStatus,
	onSave,
	onDelete,
	savedId
}) {
	const location = useLocation();
	
	return (
		<li className="movie-card">
			<a
				href={movieData.trailerLink}
				className="movie-card__link"
				target="_blank"
				rel="noreferrer"
			></a>
			<img
				className="movie-card__image"
				src={movieData.image}
				alt={'Обложка фильма ' + movieData.nameRU}
			/>
			<div className="movie-card__data">
				<div className="movie-card__info">
					<h2 className="movie-card__title">{movieData.nameRU}</h2>
					<p className="movie-card__duration">{`${Math.floor(movieData.duration / 60) ? Math.floor(movieData.duration / 60) + 'ч' : ''}${movieData.duration % 60}м`}</p>
				</div>
				<button
					onClick={() => {
						savedStatus ?
							onDelete(savedId) :
							onSave(movieData);
					}}
					aria-label={location.pathname === '/saved-movies' ?
						'Удалить фильм' :
						'Сохранить фильм'}
					className={`movie-card__button hover hover_type_button ${location.pathname === '/saved-movies' ?
						'movie-card__button_delete' :
						savedStatus ?
							'movie-card__button_saved' :
							'movie-card__button_unsaved'}`}
				></button>
			</div>
		</li>
	);
}

export default MoviesCard;