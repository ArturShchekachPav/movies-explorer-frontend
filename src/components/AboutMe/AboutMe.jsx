import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import myPhoto from '../../images/me-photo.jpg';

function AboutMe() {
	return (
		<section className="about-me" id="about-me">
			<div className="container">
				<SectionTitle title="Студент" />
				<div className="about-me__info">
					<div className="about-me__text">
						<h3 className="about-me__name">Виталий</h3>
						<p className="about-me__data">Фронтенд-разработчик, 30 лет</p>
						<p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
						                                     и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
						<a href="https://github.com/ArturShchekachPav" target="_blank" rel="noreferrer" className="about-me__github hover hover_type_link">Github</a>
					</div>
					<img
						className="about-me__photo"
						src={myPhoto}
						alt="Моя фотография"
					/>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
