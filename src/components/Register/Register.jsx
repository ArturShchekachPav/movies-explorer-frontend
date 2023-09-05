import {Link} from 'react-router-dom';
import './Register.css';

function Register() {
	return (
		<div className="register container">
			<header className="register__header">
				<div className="register__logo"></div>
				<h1 className="register__greeting">Добро пожаловать!</h1>
			</header>
				<form
					className="register__form"
				>
					<fieldset className="register__fieldset">
						<label
							className="register__label"
						>
							Имя
							<input
								type="text"
								className="register__input"
							/>
						</label>
						<label
							className="register__label"
						>
							E-mail
							<input
								type="text"
								className="register__input"
							/>
						</label>
						<label
							className="register__label"
						>
							Пароль
							<input
								type="password"
								className="register__input"
							/>
							<span className="register__error">Что-то пошло не так...</span>
						</label>
					</fieldset>
					<button className="register__button hover hover_type_button">Зарегистрироваться</button>
				</form>
				<p className="register__text">Уже зарегистрированы? <Link to="/sing-in" className="register__link hover hover_type_link">Войти</Link></p>
		</div>
	);
}

export default Register;