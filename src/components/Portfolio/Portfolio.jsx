import './Portfolio.css';
import {Link} from 'react-router-dom';

function Portfolio() {
	return (
		<section className="portfolio">
			<div className="container">
				<h2 className="portfolio__title">Портфолио</h2>
				<ul className="portfolio__projects-list">
					<li className="portfolio__project">
						<a href="" target="_blank" className="portfolio__project-link hover hover_type_link">Статичный сайт</a>
					</li>
					<li className="portfolio__project">
						<a href="" target="_blank" className="portfolio__project-link hover hover_type_link">Адаптивный сайт</a>
					</li>
					<li className="portfolio__project">
						<a href="" target="_blank" className="portfolio__project-link hover hover_type_link">Одностраничное приложение</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;