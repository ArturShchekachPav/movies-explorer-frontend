import {
	NavLink,
	useLocation,
	useNavigate
} from 'react-router-dom';
import './Navigation.css';

function Navigation({modificator}) {
	const location = useLocation();
	const navigate = useNavigate();
	
	return location.pathname === '/' ?
		(
			<nav className="navigation navigation_type_main">
				<ul className="navigation__list navigation__list_type_main">
					<li className="navigation__item">
						<NavLink
							className="navigation__link navigation__link_type_register hover hover_type_link"
							to="/sing-up"
						>Регистрация</NavLink>
					</li>
					<li className="navigation__item">
						<NavLink
							className="navigation__link navigation__link_type_login hover hover_type_button"
							to="/sing-in"
						>Войти</NavLink>
					</li>
				</ul>
			</nav>
		
		) :
		(
			<nav
				className={`navigation ${modificator ?
					'navigation_type_' + modificator :
					''}`}
			>
				<ul
					className={`navigation__list ${modificator ?
						'navigation__list_type_' + modificator :
						''}`}
				>
					<li
						className={`navigation__item ${modificator ?
							'navigation__item_type_' + modificator :
							''}`}
					>
						<NavLink
							className={`navigation__link ${modificator ?
								'navigation__link_type_' + modificator :
								''} hover hover_type_link`}
							to="/"
						>Главная</NavLink>
					</li>
					<li
						className={`navigation__item ${modificator ?
							'navigation__item_type_' + modificator :
							''}`}
					>
						<NavLink
							className={`navigation__link ${modificator ?
								'navigation__link_type_' + modificator :
								''} hover hover_type_link`}
							to="/movies"
						>Фильмы</NavLink>
					</li>
					<li
						className={`navigation__item ${modificator ?
							'navigation__item_type_' + modificator :
							''}`}
					>
						<NavLink
							className={`navigation__link ${modificator ?
								'navigation__link_type_' + modificator :
								''} hover hover_type_link`}
							to="/saved-movies"
						>Сохранённые фильмы</NavLink>
					</li>
					<li
						className={`navigation__item ${modificator ?
							'navigation__item_type_' + modificator :
							''}`}
					>
					</li>
				</ul>
				<button
					onClick={() => {
						navigate('/profile',
							{replace: true}
						);
					}}
					className={`navigation__button ${modificator ?
						'navigation__button_type_' + modificator :
						''}  hover hover_type_button`}
				>Аккаунт
				</button>
			</nav>
		);
}

export default Navigation;