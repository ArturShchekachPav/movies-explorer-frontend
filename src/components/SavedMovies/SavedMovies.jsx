import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';
import {useForm} from 'react-hook-form';
import {
	useEffect,
	useState
} from 'react';
import filterMovies from '../../utils/filterMovies';

export function SavedMovies({
	children,
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
	
	useEffect(() => {
		setMoviesList(moviesList.filter((movie) => savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId)));
	}, [savedMovies])
	
	function onSubmit(searchData) {
		const foundMovies = filterMovies(savedMovies, searchData);
		
		setMoviesList(foundMovies);
	}
	
	return (
		<div className="saved-movies">
			{children}
			<main className="saved-movies__main">
				<SearchForm
					setMoviesList={setMoviesList}
					onSubmit={handleSubmit(onSubmit)}
					errors={errors}
					inputRegister={register}
				/>
				<MoviesCardList>
					{moviesList?.length ? moviesList.map((movie) => <MoviesCard
						movieData={movie}
						savedStatus={true}
						savedId={movie._id}
						key={movie.movieId}
						onDelete={onMovieDelete}
					/>) : <h1>Нет сохраненных фильмов</h1>}
				</MoviesCardList>
			</main>
			<Footer/>
		</div>
	);
}

export default SavedMovies;