import {Link} from 'react-router-dom';
import ApiError from '../ApiError/ApiError';
import {useForm} from 'react-hook-form';

function Login() {
	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
			isDirty
		}
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: ''
		}
	});
	
	function onSubmit(data) {
		alert(data);
	}
	
	return (
		<div className="register container">
			<header className="register__header">
				<Link
					className="register__logo hover hover_type_link"
					to="/"
				></Link>
				<h1 className="register__greeting">Рады видеть!</h1>
			</header>
			<main className="register__main">
				<form
					className="register__form"
					name="login"
					onSubmit={handleSubmit(onSubmit)}
				>
					<fieldset className="register__fieldset">
						<label
							className="register__label"
						>
							E-mail
							<input
								type="email"
								className={`register__input ${errors?.email && 'register__input_error'}`}
								placeholder="Email"
								{...register('email',
									{
										required: 'Это обязательное поле',
										pattern: {
											value: /\S+@\S+\.\S+/,
											message: 'Введите корректный email'
										}
									}
								)}
								id="email-register"
							/>
							{errors?.email && <span className="register__error">{errors?.email?.message}</span>}
						</label>
						<label
							className="register__label"
						>
							Пароль
							<input
								type="password"
								className={`register__input ${errors?.password && 'register__input_error'}`}
								placeholder="Пароль"
								{...register('password',
									{required: 'Это обязательное поле'}
								)}
								id="password-register"
							/>
							{errors?.password && <span className="register__error">{errors?.password?.message}</span>}
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
							disabled={!isDirty || !isValid}
						>Войти
						</button>
					</div>
				</form>
				<p className="register__text">Еще не зарегистрированы? <Link
					to="/sing-up"
					className="register__link hover hover_type_link"
				>Регистрация</Link></p>
			</main>
		</div>
	);
}

export default Login;