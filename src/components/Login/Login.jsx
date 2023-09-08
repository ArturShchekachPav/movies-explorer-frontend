import {Link} from 'react-router-dom';
import ApiError from '../ApiError/ApiError';

function Login() {
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
				<h1 className="register__greeting">Рады видеть!</h1>
			</header>
			<form
				className="register__form"
				name="login"
				onSubmit={handleSubmit}
			>
				<fieldset className="register__fieldset">
					<label
						className="register__label"
					>
						E-mail
						<input
							type="email"
							className="register__input"
							name="email-input"
							id="email-login"
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
							id="password-login"
							required
						/>
						<span className="register__error"></span>
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
					>Войти
					</button>
				</div>
			</form>
			<p className="register__text">Еще не зарегистрированы? <Link
				to="/sing-up"
				className="register__link hover hover_type_link"
			>Регистрация</Link></p>
		</div>
	);
}

export default Login;