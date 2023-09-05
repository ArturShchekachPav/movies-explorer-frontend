import { NavLink } from 'react-router-dom';
import "./Header.css";
import Navigation from '../Navigation/Navigation';

function Header() {
	return (
		<div className="header container">
			<NavLink className="header__logo" to="/"></NavLink>
			<Navigation />
		</div>
	);
}

export default Header;