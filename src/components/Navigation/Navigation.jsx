import {NavLink, useLocation} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
	const location = useLocation();
	
	return location.pathname === "/" ? (
				<nav className="navigation navigation_main">
					<ul className="navigation__list navigation__list_main">
						<li className="navigation__item">
							<NavLink className="navigation__link navigation__link_type_register hover hover_type_link" to="/sing-up">Регистрация</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink className="navigation__link navigation__link_type_login hover hover_type_button" to="/sing-in">Войти</NavLink>
						</li>
					</ul>
				</nav>
			
			) : (
				<nav className="navigation">
					<ul className="navigation__list">
						<li className="navigation__item">
							<NavLink className="navigation__link navigation__link_type_pages hover hover_type_link" to="/movies">Фильмы</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink className="navigation__link navigation__link_type_pages hover hover_type_link" to="/saved-movies">Сохранённые фильмы</NavLink>
						</li>
						<li className="navigation__item navigation__item_type_profile">
							<NavLink className="navigation__link navigation__link_type_profile hover hover_type_button" to="/profile">Аккаунт</NavLink>
						</li>
					</ul>
				</nav>
	);
}

export default Navigation;