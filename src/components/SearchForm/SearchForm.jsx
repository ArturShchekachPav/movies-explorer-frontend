import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
	return (
		<section className="search container">
			<form className="search__form">
				<fieldset className="search__form-fieldset">
					<div className="search__icon"></div>
					<input
						type="text"
						placeholder="Фильм"
						className="search__input"
					/>
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