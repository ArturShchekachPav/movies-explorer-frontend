import {Link} from 'react-router-dom';

function Login() {
	return (
		<div className="register container">
			<header className="register__header">
				<div className="register__logo"></div>
				<h1 className="register__greeting">Рады видеть!</h1>
			</header>
			<form
				className="register__form"
			>
				<fieldset className="register__fieldset">
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
					</label>
				</fieldset>
				<button className="register__button hover hover_type_button">Войти</button>
			</form>
			<p className="register__text">Еще не зарегистрированы? <Link to="/sing-up" className="register__link hover hover_type_link">Регистрация</Link></p>
		</div>
	);
}

export default Login;