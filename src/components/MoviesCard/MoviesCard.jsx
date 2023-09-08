import './MoviesCard.css';
import {useLocation} from 'react-router-dom';
import {useState} from 'react';

function MoviesCard({
	image,
	title,
	duration,
	saved
}) {
	const location = useLocation();
	const [isSaved, setIsSaved] = useState(saved);
	
	return (
		<li className="movie-card">
			<img
				className="movie-card__image"
				src={image}
				alt={'Обложка фильма ' + title}
			/>
			<div className="movie-card__data">
				<div className="movie-card__info">
					<h2 className="movie-card__title">{title}</h2>
					<p className="movie-card__duration">{duration}</p>
				</div>
				<button
					onClick={() => setIsSaved(!isSaved)}
					aria-label={location.pathname === '/saved-movies' ?
						'Удалить фильм' :
						'Сохранить фильм'}
					className={`movie-card__button hover hover_type_button ${location.pathname === '/saved-movies' ?
						'movie-card__button_delete' :
						isSaved ?
							'movie-card__button_saved' :
							'movie-card__button_unsaved'}`}
				></button>
			</div>
		</li>
	);
}

export default MoviesCard;