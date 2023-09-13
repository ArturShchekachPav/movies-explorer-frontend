import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useForm} from 'react-hook-form';
import moviesApi from '../../utils/MoviesApi';

function SearchForm() {
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm({
		mode: "onSubmit",
		defaultValues: {search: ''}
	});
	
	function onSubmit() {
		moviesApi.getAllMovies()
			.then(res => {
				console.log(res);
			})
	}
	
	return (
		<section className="search container">
			<form className="search__form" onSubmit={handleSubmit(onSubmit)}>
				<fieldset className="search__form-fieldset">
					<div className="search__icon"></div>
					<label className="search__label">
						<input
							type="text"
							placeholder="Фильм"
							className="search__input"
							{...register("search", {required: true})}
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
				<FilterCheckbox/>
			</form>
			<div className="search__divider"></div>
		</section>
	);
}

export default SearchForm;