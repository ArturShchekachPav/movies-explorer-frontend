import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
	return (
		<section
			className="about-project"
			id="about-project"
		>
			<div className="container">
				<SectionTitle title="О проекте"/>
				<article className="about-project__description">
					<div className="about-project__description-column">
						<h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
						<p className="about-project__description-paragraph">
							Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
						</p>
					</div>
					<div className="about-project__description-column">
						<h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
						<p className="about-project__description-paragraph">
							У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
						</p>
					</div>
				</article>
				<div className="about-project__timeline">
					<div className="about-project__timeline-part">
						<p className="about-project__timeline-duration about-project__timeline-duration_fill">1 неделя</p>
						<p className="about-project__timeline-subject">Back-end</p>
					</div>
					<div className="about-project__timeline-part">
						<p className="about-project__timeline-duration">4 недели</p>
						<p className="about-project__timeline-subject">Front-end</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutProject;