import './FilterCheckbox.css';

function FilterCheckbox({inputRegister}) {
	return (
		<label className="filter">
			<input
				type="checkbox"
				className="filter__checkbox"
				{...inputRegister('shortFilm')}
			/>
			<span className="filter__visible-checkbox hover hover_type_button">
						<span className="filter__checkbox-indicator"></span>
					</span>
			Короткометражки
		</label>
	);
}

export default FilterCheckbox;