import Header from '../Header/Header';
import './Profile.css';

export function Profile({onSidebarClose}) {
	return (
		<div className="profile">
			<Header onSidebarClose={onSidebarClose} />
			<h1 className="profile__greeting">Привет, Виталий!</h1>
			<div className="profile__data-container">
				<div className="profile__data-field">
					<label className="profile__data-label">Имя</label>
					<input className="profile__data-input" value="Виталий" type='text' disabled={true} />
				</div>
				<div className="profile__data-divider"></div>
				<div className="profile__data-field">
					<label className="profile__data-label">E-mail</label>
					<input className="profile__data-input" value="pochta@yandex.ru" type='text' disabled={true} />
				</div>
			</div>
			<div className="profile__buttons">
				<button className="profile__button">Редактировать</button>
				<button className="profile__button profile__button_exit">Выйти из аккаунта</button>
			</div>
		</div>
	);
}

export default Profile;