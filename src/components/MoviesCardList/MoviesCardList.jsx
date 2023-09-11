import './MoviesCardList.css';

function MoviesCardList({
	children,
	possibleMore
}) {
	return children ?
		(
			<section className="moviescardlist">
				<ul className="container moviescardlist__list">
					{children}
				</ul>
				<div
					className={`moviescardlist__more ${possibleMore ?
						'' :
						'moviescardlist__more_disabled'}`}
				>
					<button
						className={`moviescardlist__more-button ${possibleMore ?
							'' :
							'moviescardlist__more-button_disabled'} hover hover_type_button`}
					>Ещё
					</button>
				</div>
			</section>
		) :
		(<section className="moviescardlist">
			<h2 className="moviescardlist__title">Ничего не найдено</h2>
		</section>);
}

export default MoviesCardList;