import {
	Link
} from 'react-router-dom';
import './Register.css';
import ApiError from '../ApiError/ApiError';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

function Register({isLoading, handleRegister, setIsLoading}) {
	const [apiError, setApiError] = useState({
		message: '',
		show: false
	});
	
	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
			isDirty
		},
		reset
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	});
	
	function onSubmit(data) {
		handleRegister(data)
			.catch(err => {
			console.log(err);
			setApiError({
				message: err.message,
				show: true
			});
		})
			.finally(() => {
				setIsLoading(false);
				reset();
			});
	}
	
	return (
		<div className="register container">
			<header className="register__header">
				<Link
					className="register__logo hover hover_type_link"
					to="/"
				></Link>
				<h1 className="register__greeting">Добро пожаловать!</h1>
			</header>
			<main className="register__main">
				<form
					className="register__form"
					name="register"
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<fieldset className="register__fieldset">
						<label
							className="register__label"
						>
							Имя
							<input
								type="text"
								className={`register__input ${errors?.name && 'register__input_error'}`}
								maxLength="30"
								placeholder="Имя"
								{...register('name',
									{
										required: 'Это обязательное поле',
										minLength: {
											value: 2,
											message: 'Значение должно быть длиннее 2-х символов'
										},
										maxLength: 30
									}
								)}
								id="name-register"
							/>
							{errors?.name && <span className="register__error">{errors?.name?.message}</span>}
						</label>
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
							message={apiError.message}
							show={apiError.show}
						/>
						<button
							type="submit"
							className="register__button hover hover_type_button"
							disabled={!isDirty || !isValid || isLoading}
						>{isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
						</button>
					</div>
				</form>
				<p className="register__text">Уже зарегистрированы? <Link
					to="/sing-in"
					className="register__link hover hover_type_link"
				>Войти</Link></p>
			</main>
		</div>
	);
}

export default Register;