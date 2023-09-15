import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';
import {useForm} from 'react-hook-form';
import {
	useState
} from 'react';

export function SavedMovies({
	onSidebarClose,
	savedMovies,
	onMovieDelete
}) {
	const [moviesList, setMoviesList] = useState(savedMovies);
	
	const {
		register,
		handleSubmit,
		formState: {errors}
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			search: '',
			shortFilm: ''
		}
	});
	
	function onSubmit({
		search,
		shortFilm
	}) {
		const foundMovies = moviesList.filter(({
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
	}
	
	return (
		<div className="saved-movies">
			<Header
				onSidebarClose={onSidebarClose}
				isLoggedIn={true}
			/>
			<main className="saved-movies__main">
				<SearchForm
					setMoviesList={setMoviesList}
					onSubmit={() => handleSubmit(onSubmit)}
					errors={errors}
					inputRegister={register}
				/>
				<MoviesCardList>
					{moviesList.map((movie) => <MoviesCard
						movieData={movie}
						savedStatus={true}
						savedId={movie._id}
						key={movie.movieId}
						onDelete={onMovieDelete}
					/>)}
				</MoviesCardList>
			</main>
			<Footer/>
		</div>
	);
}

export default SavedMovies;