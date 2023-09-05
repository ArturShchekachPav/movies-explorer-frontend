import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
				<div className="footer__info">
					<p className="footer__year">© 2020</p>
					<Link to="/#" className="footer__link">Яндекс.Практикум</Link>
					<Link to="/#" className="footer__link">Github</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;