import {
	NavLink,
	useLocation
} from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({onSidebarClose}) {
	const location = useLocation();
	
	return (
		<div className="header container">
			<NavLink
				className="header__logo"
				to="/"
			></NavLink>
			<Navigation modificator="header"/>
			{location.pathname !== '/' && <button
				type="button"
				onClick={() => onSidebarClose(true)}
				className="header__burger-menu"
				aria-label="Открыть меню"
			></button>}
		</div>
	);
}

export default Header;