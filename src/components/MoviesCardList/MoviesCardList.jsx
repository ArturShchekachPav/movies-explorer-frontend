import './MoviesCardList.css';

function MoviesCardList({children, possibleMore}) {
	return (
		<section className="movies">
			<ul className="container movies__list">
				{children}
			</ul>
			<div className="movies__more">
				<button className={`movies__more-button ${possibleMore ? '' : 'movies__more-button_disabled'}`}>Ещё</button>
			</div>
		</section>
	);
}

export default MoviesCardList;