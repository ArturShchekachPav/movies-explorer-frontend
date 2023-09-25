const filterMovies = (arr, {search, shortFilm}) => arr.filter(({
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

export default filterMovies;