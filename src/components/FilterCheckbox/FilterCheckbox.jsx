import './FilterCheckbox.css';

function FilterCheckbox() {
	return (
		<label className="filter">
			<input type="checkbox" className="filter__checkbox"/>
			<span className="filter__visible-checkbox">
						<span className="filter__checkbox-indicator"></span>
					</span>
			Короткометражки
		</label>
	);
}

export default FilterCheckbox;