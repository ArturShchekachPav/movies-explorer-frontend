import Header from '../Header/Header';
import './Profile.css';
import {useState} from 'react';
import ApiError from '../ApiError/ApiError';
import {useForm} from 'react-hook-form';

export function Profile({
	onSidebarClose,
	name,
	email
}) {
	const [isEditing, setIsEditing] = useState(false);
	const {
		register,
		handleSubmit,
		formState: {isValid}
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			name: name,
			email: email
		}
	});

	function onSubmit() {
		setIsEditing(false);
	}

	return (
		<div className="profile">
			<Header onSidebarClose={onSidebarClose}/>
			<main className="profile__main">
				<h1 className="profile__greeting">Привет, {name}!</h1>
				<form
					className="profile__data-container"
					name="profile-edit"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="profile__data-field">
						<label className="profile__data-label">Имя</label>
						<input
							className="profile__data-input"
							type="text"
							maxLength="30"
							minLength="2"
							placeholder="Имя"
							{...register('name',
								{
									required: true,
									minLength: 2,
									maxLength: 30
								}
							)}
							id="name-profile"
							disabled={!isEditing}
						/>
					</div>
					<div className="profile__data-divider"></div>
					<div className="profile__data-field">
						<label className="profile__data-label">E-mail</label>
						<input
							className="profile__data-input"
							type="email"
							placeholder="Email"
							pattern="\S+@\S+\.\S+"
							{...register('email',
								{
									required: true,
									pattern: /\S+@\S+\.\S+/
								}
							)}
							id="email-profile"
							disabled={!isEditing}
						/>
					</div>
					<div className="profile__buttons">
						<button
							type="button"
							onClick={() => setIsEditing(true)}
							className={`profile__button ${!isEditing && 'profile__button_active'} profile__button_edit hover_type_button hover`}
						>Редактировать
						</button>
						<button
							type="button"
							className={`profile__button ${!isEditing && 'profile__button_active'} profile__button_exit hover_type_button hover`}
						>Выйти из аккаунта
						</button>
						<ApiError
							message={!isValid && 'Некорректное имя или email'}
							show={!isValid}
						/>
						<button
							type="submit"
							className={`profile__button ${isEditing && 'profile__button_active'} profile__button_save hover_type_button hover`}
							disabled={!isValid}
						>Сохранить
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}

export default Profile;
