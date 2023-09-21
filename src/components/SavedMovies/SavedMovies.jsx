import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import {useForm} from 'react-hook-form';
import {
	useEffect,
	useState
} from 'react';
import filterMovies from '../../utils/filterMovies';
import Preloader from '../Preloader/Preloader';

export function SavedMovies({
	children,
	savedMovies,
	onMovieDelete,
	isLoading
}) {
	const [moviesList, setMoviesList] = useState(savedMovies);
	
	const {
		register,
		handleSubmit,
		formState: {errors},
		watch,
		getValues
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			search: '',
			shortFilm: ''
		}
	});
	
	useEffect(() => {
			setMoviesList(moviesList.filter((movie) => savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId)));
		},
		[savedMovies]
	);
	
	function onSubmit(searchData) {
		const foundMovies = filterMovies(savedMovies,
			searchData
		);
		
		setMoviesList(foundMovies);
	}
	
	useEffect(() => {
			onSubmit(getValues());
		},
		[watch('shortFilm')]
	);
	
	return (
		<div className="saved-movies">
			{children}
			<main className="saved-movies__main">
				<SearchForm
					setMoviesList={setMoviesList}
					onSubmit={handleSubmit(onSubmit)}
					errors={errors}
					inputRegister={register}
					isLoading={isLoading}
				/>
				{Boolean(savedMovies.length) && (isLoading ?
					<Preloader/> :
					<MoviesCardList
						moviesList={moviesList}
						moviesMethods={{handleDeleteMovieCard: onMovieDelete}}
					/>)
				}
			</main>
			<Footer/>
		</div>
	);
}

export default SavedMovies;