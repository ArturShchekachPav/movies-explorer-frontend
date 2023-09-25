class MainApi {
	constructor({ baseUrl, headers }) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}
	
	_checkResponse(res) {
		if (res.ok) {
			return res.json();
		}
		
		return res.json().then(err => Promise.reject(err));
	}
	
	register(name, email, password) {
		return fetch(this.baseUrl + '/signup',{
			method: 'POST',
			headers: this.headers,
			credentials: 'include',
			body: JSON.stringify({
				name,
				email,
				password
			})
		})
			.then(this._checkResponse);
	}
	
	login(email, password) {
		return fetch(`${this.baseUrl}/signin`,
			{
				method: 'POST',
				headers: this.headers,
				credentials: 'include',
				body: JSON.stringify({
					email,
					password
				})
			}
		)
			.then(this._checkResponse);
	}
	
	logout() {
		return fetch(this.baseUrl + '/signout', {
			method: 'GET',
			credentials: 'include'
		})
			.then(this._checkResponse);
	}
	
	getProfileData() {
		return fetch(this.baseUrl + '/users/me', {
			method: 'GET',
			credentials: 'include'
		})
			.then(this._checkResponse);
	}
	
	editProfileData(name, email) {
		return fetch(this.baseUrl + '/users/me', {
			method: 'PATCH',
			headers: this.headers,
			credentials: 'include',
			body: JSON.stringify({
				name,
				email
			})
		})
			.then(this._checkResponse);
	}
	
	getMovies() {
		return fetch(this.baseUrl + '/movies', {
			method: 'GET',
			credentials: 'include'
		})
			.then(this._checkResponse);
	}
	
	createMovie({country,
		director,
		duration,
		year,
		description,
		image,
		trailerLink,
		thumbnail,
		movieId,
		nameRU,
		nameEN}) {
		return fetch(this.baseUrl + '/movies', {
			method: 'POST',
			headers: this.headers,
			credentials: 'include',
			body: JSON.stringify({
				country,
				director,
				duration,
				year,
				description,
				image,
				trailerLink,
				thumbnail,
				movieId,
				nameRU,
				nameEN
			})
		})
			.then(this._checkResponse);
	}
	
	deleteMovie(movieId) {
		return fetch(this.baseUrl + '/movies/' + movieId.toString(), {
			method: 'DELETE',
			credentials: 'include'
		})
			.then(this._checkResponse);
	}
}

const mainApi = new MainApi({
	baseUrl: 'https://api.bestmoviesearcher.nomoredomainsrocks.ru',
	headers: {
		'Content-Type': 'application/json',
	}});

export default mainApi;
