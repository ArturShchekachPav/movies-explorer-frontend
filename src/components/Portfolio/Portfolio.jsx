import './Portfolio.css';

function Portfolio() {
	return (
		<section className="portfolio">
			<div className="container">
				<h2 className="portfolio__title">Портфолио</h2>
				<ul className="portfolio__projects-list">
					<li className="portfolio__project">
						<a
							href="https://arturshchekachpav.github.io/how-to-learn/"
							target="_blank"
							rel="noreferrer"
							className="portfolio__project-link hover hover_type_link"
						>Статичный сайт</a>
					</li>
					<li className="portfolio__project">
						<a
							href="https://arturshchekachpav.github.io/russian-travel/"
							target="_blank"
							rel="noreferrer"
							className="portfolio__project-link hover hover_type_link"
						>Адаптивный сайт</a>
					</li>
					<li className="portfolio__project">
						<a
							href="https://keeperofplaces.nomoredomains.xyz/"
							target="_blank"
							rel="noreferrer"
							className="portfolio__project-link hover hover_type_link"
						>Одностраничное приложение</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
