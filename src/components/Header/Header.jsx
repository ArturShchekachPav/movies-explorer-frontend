import {
	NavLink,
	useLocation
} from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({onSidebarClose}) {
	const location = useLocation();

	return (
		<header className="header container">
			<NavLink
				className="header__logo hover_type_link hover"
				to="/"
			></NavLink>
			<Navigation modificator="header"/>
			{location.pathname !== '/' && <button
				type="button"
				onClick={() => onSidebarClose(true)}
				className="header__burger-menu hover hover_type_button"
				aria-label="Открыть меню"
			></button>}
		</header>
	);
}

export default Header;
