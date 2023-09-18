import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import {
	useEffect,
	useState
} from 'react';
import {useForm} from 'react-hook-form';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import filterMovies from '../../utils/filterMovies';

export function Movies({
	children,
	savedMovies,
	onSaveMovie,
	onMovieDelete,
	isLoading,
	setIsLoading
}) {
	const [moviesList, setMoviesList] = useState([]);
	const [width, setWidth] = useState(window.innerWidth);
	const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem('foundMovies')) || []);
	const [moreClicksCount, setMoreClicksCount] = useState(1);
	const [k, setK] = useState(null);
	
	const {
		register,
		handleSubmit,
		setValue,
		formState: {errors}
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			search: '',
			shortFilm: ''
		}
	});
	
	
	useEffect(() => {
			const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
			
			if (lastSearch) {
				setValue('search',
					lastSearch.search
				);
				setValue('shortFilm',
					lastSearch.shortFilm
				);
			}
			
			const handleResizeWindow = () => setWidth(window.innerWidth);
			
			window.addEventListener('resize',
				handleResizeWindow
			);
			return () => {
				window.removeEventListener('resize',
					handleResizeWindow
				);
			};
		},
		[]
	);
	
	useEffect(() => {
		function determineTheMultiplicity(multiplicity) {
			setK(multiplicity);
			setMoviesList(foundMovies.slice(0,
				multiplicity * moreClicksCount
			));
		}
		
		if (width > 1024) {
			determineTheMultiplicity(16);
			} else if (width > 500) {
			determineTheMultiplicity(8);
			} else {
			determineTheMultiplicity(5);
			}
		},
		[width,
			foundMovies,
			moreClicksCount
		]
	);
	
	function onSubmit(searchData) {
		setIsLoading(true);
		
		moviesApi.getAllMovies()
			.then(allMovies => {
				const foundMovies = filterMovies(allMovies,
					searchData
				);
				
				setFoundMovies(foundMovies);
				setMoreClicksCount(1);
				
				localStorage.setItem('foundMovies',
					JSON.stringify(foundMovies)
				);
				localStorage.setItem('lastSearch',
					JSON.stringify(searchData)
				);
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false));
	}
	
	return (
		<div className="movies">
			{children}
			<main className="movies__main">
				<SearchForm
					setMoviesList={setMoviesList}
					onSubmit={handleSubmit(onSubmit)}
					errors={errors}
					inputRegister={register}
				/>
				{JSON.parse(localStorage.getItem('foundMovies')) && (isLoading ?
					(<Preloader/>) :
					(
						<>
							<MoviesCardList possibleMore={true}>
								{moviesList?.length && moviesList.map((movie) => {
										const savedId = savedMovies?.find((savedMovie) => savedMovie.movieId === movie.id)?._id;
										
										return <MoviesCard
											movieData={{
												...movie,
												image: `https://api.nomoreparties.co/${movie.image.url}`,
												thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
												movieId: movie.id
											}}
											key={movie.id}
											savedStatus={Boolean(savedId)}
											savedId={savedId}
											onDelete={onMovieDelete}
											onSave={onSaveMovie}
										/>;
									})}
							</MoviesCardList>
							<div
								className={`moviescardlist__more ${!(foundMovies.length > moreClicksCount * k) && 'moviescardlist__more_disabled'}`}
							>
								<button
									onClick={() => setMoreClicksCount(moreClicksCount + 1)}
									className={`moviescardlist__more-button ${!(foundMovies.length > moreClicksCount * k) && 'moviescardlist__more-button_disabled'} hover hover_type_button`}
								>Ещё
								</button>
							</div>
						</>
					))}
			</main>
			<Footer/>
		</div>
	);
}

export default Movies;
