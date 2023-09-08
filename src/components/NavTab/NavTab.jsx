import './NavTab.css';
import {Link} from 'react-scroll';

function NavTab() {
	return (
		<section className="nav-tab">
			<nav className="nav-tab__nav">
				<ul className="nav-tab__tabs">
					<li className="nav-tab__tab">
						<Link
							smooth={true}
							duration={500}
							className="nav-tab__link hover hover_type_link"
							to="about-project"
						>О проекте</Link>
					</li>
					<li className="nav-tab__tab">
						<Link
							smooth={true}
							duration={500}
							className="nav-tab__link hover hover_type_link"
							to="techs"
						>Технологии</Link>
					</li>
					<li className="nav-tab__tab">
						<Link
							smooth={true}
							duration={500}
							className="nav-tab__link hover hover_type_link"
							to="about-me"
						>Студент</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default NavTab;
