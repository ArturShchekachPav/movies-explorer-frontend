import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import './Main.css';

function Main({children}) {
	return (
		<div className="main">
			{children}
			<main>
				<Promo/>
				<NavTab/>
				<AboutProject/>
				<Techs/>
				<AboutMe/>
				<Portfolio/>
			</main>
			<Footer/>
		</div>
	);
}

export default Main;