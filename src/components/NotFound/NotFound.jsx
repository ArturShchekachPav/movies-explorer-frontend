import {useNavigate} from 'react-router-dom';
import './NotFound.css';

function NotFound() {
	const navigate = useNavigate();
	
	return (
		<div className="not-found">
			<header className="not-found__header">
				<h1 className="not-found__title">404</h1>
				<p className="not-found__subtitle">Страница не найдена</p>
			</header>
			<main className="not-found__main">
				<button
					className="not-found__button hover hover_type_link"
					onClick={() => navigate(-1)}
				>Назад
				</button>
			</main>
		</div>
	);
}

export default NotFound;