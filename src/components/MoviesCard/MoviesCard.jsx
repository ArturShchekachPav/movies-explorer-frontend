import "./MoviesCard.css";
import {useLocation} from 'react-router-dom';

function MoviesCard({image, title, duration, saved}) {
	const location = useLocation();
	
	return (
		<li className="movie-card">
			<img
				className="movie-card__image"
				src={image}
				alt={"Обложка фильма " + title}
			/>
			<div className="movie-card__data">
				<div className="movie-card__info">
					<h2 className="movie-card__title">{title}</h2>
					<p className="movie-card__duration">{duration}</p>
				</div>
				<button className={`movie-card__button ${location.pathname === "/saved-movies" ? "movie-card__button_delete" : saved ? "movie-card__button_saved" : "movie-card__button_unsaved"}`}></button>
			</div>
		</li>
	);
}

export default MoviesCard;