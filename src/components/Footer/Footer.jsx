import './Footer.css';

function Footer() {
	return (
		<footer className="footer">
			<div className="container footer__container">
				<h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
				<div className="footer__info">
					<p className="footer__year">© 2020</p>
					<a
						href="https://practicum.yandex.ru/"
						target="_blank"
						rel="noreferrer"
						className="footer__link hover hover_type_link"
					>Яндекс.Практикум</a>
					<a
						href="https://github.com/ArturShchekachPav"
						target="_blank"
						rel="noreferrer"
						className="footer__link hover hover_type_link"
					>Github</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
