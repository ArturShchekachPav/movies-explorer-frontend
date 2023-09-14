import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useForm} from 'react-hook-form';
import moviesApi from '../../utils/MoviesApi';
import {useEffect} from 'react';

function SearchForm({setMoviesList}) {
	const {
		register,
		handleSubmit,
		setValue,
		formState: {errors}
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			search: '',
			shortFilm: ''
		}
	});
	
	useEffect(() => {
			const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
			
			if (lastSearch) {
				setValue('search',
					lastSearch.search
				);
				setValue('shortFilm',
					lastSearch.shortFilm
				);
			}
		},
		[]
	);
	
	function onSubmit(searchData) {
		const {
			search,
			shortFilm
		} = searchData;
		
		moviesApi.getAllMovies()
			.then(allMovies => {
				const foundMovies = allMovies.filter(({
					nameRU,
					nameEN,
					duration
				}) => {
					if (shortFilm) {
						return (nameRU.toLowerCase()
							.includes(search.toLowerCase()) || nameEN.toLowerCase()
							.includes(search.toLowerCase())) && (duration <= 40);
					}
					
					return nameRU.toLowerCase()
						.includes(search.toLowerCase()) || nameEN.toLowerCase()
						.includes(search.toLowerCase());
				});
				
				setMoviesList(foundMovies);
				
				localStorage.setItem('foundMovies',
					JSON.stringify(foundMovies)
				);
				localStorage.setItem('lastSearch',
					JSON.stringify(searchData)
				);
			});
	}
	
	return (
		<section className="search container">
			<form
				className="search__form"
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<fieldset className="search__form-fieldset">
					<div className="search__icon"></div>
					<label className="search__label">
						<input
							type="text"
							placeholder="Фильм"
							className="search__input"
							{...register('search',
								{required: true}
							)}
						/>
						{errors?.search && <span className="search__error">Нужно ввести ключевое слово</span>}
					</label>
					<button
						type="submit"
						aria-label="Искать"
						className="search__button hover hover_type_button"
					></button>
				</fieldset>
				<div className="search__form-divider"></div>
				<FilterCheckbox inputRegister={register}/>
			</form>
			<div className="search__divider"></div>
		</section>
	);
}

export default SearchForm;