import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
	return (
		<section className="search container">
			<form className="search__form">
				<div className="search__icon"></div>
				<input type="text" placeholder="Фильм" className="search__input"/>
				<button type="submit" className="search__button"></button>
				<div className="search__form-divider"></div>
				<FilterCheckbox />
			</form>
			<div className="search__divider"></div>
		</section>
	);
}

export default SearchForm;