import './MoviesCardList.css';

function MoviesCardList({children}) {
	return children ?
		(
			<section className="moviescardlist">
				<ul className="container moviescardlist__list">
					{children}
				</ul>
			</section>
		) :
		(<section className="moviescardlist">
			<h2 className="moviescardlist__title">Ничего не найдено</h2>
		</section>);
}

export default MoviesCardList;