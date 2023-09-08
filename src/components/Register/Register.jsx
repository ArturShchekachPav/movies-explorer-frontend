import {Link} from 'react-router-dom';
import './Register.css';
import ApiError from '../ApiError/ApiError';

function Register() {
	function handleSubmit(e) {
		e.preventDefault();
	}
	
	return (
		<div className="register container">
			<header className="register__header">
				<Link
					className="register__logo"
					to="/"
				></Link>
				<h1 className="register__greeting">Добро пожаловать!</h1>
			</header>
			<form
				className="register__form"
				name="register"
				onSubmit={handleSubmit}
			>
				<fieldset className="register__fieldset">
					<label
						className="register__label"
					>
						Имя
						<input
							type="text"
							className="register__input"
							name="name"
							id="name-register"
							minLength="2"
							maxLength="30"
							required
						/>
						<span className="register__error"></span>
					</label>
					<label
						className="register__label"
					>
						E-mail
						<input
							type="email"
							className="register__input"
							name="email"
							id="email-register"
							required
						/>
						<span className="register__error"></span>
					</label>
					<label
						className="register__label"
					>
						Пароль
						<input
							type="password"
							className="register__input"
							name="password"
							id="password-register"
							required
						/>
						<span className="register__error">Что-то пошло не так...</span>
					</label>
				</fieldset>
				<div className="register__button-container">
					<ApiError
						message="При обновлении профиля произошла ошибка."
						show={false}
					/>
					<button
						type="submit"
						className="register__button hover hover_type_button"
					>Зарегистрироваться
					</button>
				</div>
			</form>
			<p className="register__text">Уже зарегистрированы? <Link
				to="/sing-in"
				className="register__link hover hover_type_link"
			>Войти</Link></p>
		</div>
	);
}

export default Register;