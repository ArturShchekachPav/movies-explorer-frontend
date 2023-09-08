import Header from '../Header/Header';
import './Profile.css';
import {useState} from 'react';
import ApiError from '../ApiError/ApiError';

export function Profile({onSidebarClose}) {
	const [isEditing, setIsEditing] = useState(false);
	
	function handleSubmit(e) {
		e.preventDefault();
		
		setIsEditing(false);
	}
	
	return (
		<div className="profile">
			<Header onSidebarClose={onSidebarClose}/>
			<h1 className="profile__greeting">Привет, Виталий!</h1>
			<form
				className="profile__data-container"
				name="profile-edit"
				onSubmit={handleSubmit}
			>
				<div className="profile__data-field">
					<label className="profile__data-label">Имя</label>
					<input
						minLength="2"
						maxLength="30"
						className="profile__data-input"
						defaultValue="Виталий"
						type="text"
						required
						name="name"
						id="name-profile"
						disabled={!isEditing}
					/>
				</div>
				<div className="profile__data-divider"></div>
				<div className="profile__data-field">
					<label className="profile__data-label">E-mail</label>
					<input
						className="profile__data-input"
						defaultValue="pochta@yandex.ru"
						type="email"
						required
						name="email"
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
						message="При обновлении профиля произошла ошибка."
						show={false}
					/>
					<button
						type="submit"
						className={`profile__button ${isEditing && 'profile__button_active'} profile__button_save hover_type_button hover`}
					>Сохранить
					</button>
				</div>
			</form>
		</div>
	);
}

export default Profile;