import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
	onSubmit,
	inputRegister,
	errors,
	isLoading
}) {
	
	return (
		<section className="search container">
			<form
				className="search__form"
				onSubmit={onSubmit}
				noValidate
			>
				<fieldset className="search__form-fieldset">
					<div className="search__icon"></div>
					<label className="search__label">
						<input
							type="text"
							placeholder="Фильм"
							className="search__input"
							{...inputRegister('search',
								{required: true}
							)}
							disabled={isLoading}
						/>
						{errors?.search && <span className="search__error">Нужно ввести ключевое слово</span>}
					</label>
					<button
						type="submit"
						aria-label="Искать"
						className="search__button hover hover_type_button"
						disabled={isLoading}
					></button>
				</fieldset>
				<div className="search__form-divider"></div>
				<FilterCheckbox
					inputRegister={inputRegister}
					isLoading={isLoading}
					onClick={onSubmit}
				/>
			</form>
			<div className="search__divider"></div>
		</section>
	);
}

export default SearchForm;