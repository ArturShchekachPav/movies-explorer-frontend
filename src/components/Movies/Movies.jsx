import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
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
import {
	SCREEN_S,
	SCREEN_M,
	SCREEN_L,
	POSTION_OF_FILMES_L,
	POSTION_OF_FILMES_M,
	POSTION_OF_FILMES_S,
	INITIAL_NUMBER_OF_FILMS_L,
	INITIAL_NUMBER_OF_FILMS_M,
	INITIAL_NUMBER_OF_FILMS_XS,
	INITIAL_NUMBER_OF_FILMS_S
} from '../../utils/constants';

export function Movies({
	children,
	savedMovies,
	moviesCardsMethods,
	isLoading,
	setIsLoading
}) {
	const [moviesList, setMoviesList] = useState([]);
	const [width, setWidth] = useState(window.innerWidth);
	const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem('foundMovies')) || []);
	const [moreClicksCount, setMoreClicksCount] = useState(0);
	const [apiError, setApiError] = useState(false);
	
	const {
		register,
		handleSubmit,
		setValue,
		formState: {errors},
		watch,
		getValues
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			search: '',
			shortFilm: false,
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
			
			let resizeTimeout;
			
			function handleResizeWindow() {
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}
				resizeTimeout = setTimeout(function () {
						setWidth(window.innerWidth);
					},
					100
				);
			}
			
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
			function determineTheMultiplicity(multiplicity,
				dop
			) {
				setMoviesList(foundMovies.slice(0,
					multiplicity + (dop * moreClicksCount)
				));
			}
			
			if (width > SCREEN_L) {
				determineTheMultiplicity(INITIAL_NUMBER_OF_FILMS_L,
					POSTION_OF_FILMES_L
				);
			} else if (width > SCREEN_M) {
				determineTheMultiplicity(INITIAL_NUMBER_OF_FILMS_M,
					POSTION_OF_FILMES_M
				);
			} else if (width > SCREEN_S) {
				determineTheMultiplicity(INITIAL_NUMBER_OF_FILMS_S,
					POSTION_OF_FILMES_S
				);
			} else {
				determineTheMultiplicity(INITIAL_NUMBER_OF_FILMS_XS,
					POSTION_OF_FILMES_S
				);
			}
		},
		[width,
			foundMovies,
			moreClicksCount
		]
	);
	
	function getMovies() {
		return new Promise(function (resolve,
			reject
		) {
			if (!JSON.parse(localStorage.getItem('allMovies'))) {
				moviesApi.getAllMovies()
					.then((allMovies) => {
						localStorage.setItem('allMovies',
							JSON.stringify(allMovies)
						);
						
						return  resolve(allMovies);
					})
					.catch(err => reject(err));
			} else {
				return resolve(JSON.parse(localStorage.getItem('allMovies')));
			}
		});
	}
	
	function onSubmit(searchData) {
		setIsLoading(true);
		
		getMovies()
			.then(allMovies => {
				const foundMovies = filterMovies(allMovies,
					searchData
				);
				setApiError(false);
				
				setFoundMovies(foundMovies);
				setMoreClicksCount(0);
				
				localStorage.setItem('foundMovies',
					JSON.stringify(foundMovies)
				);
				localStorage.setItem('lastSearch',
					JSON.stringify(searchData)
				);
			})
			.catch(err => {
				console.log(err);
				setApiError(true);
			})
			.finally(() => setIsLoading(false));
	}
	
	useEffect(() => {
			const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
		
			if (lastSearch) {
				onSubmit({search: lastSearch.search, shortFilm: getValues('shortFilm')});
			}
		},
		[watch('shortFilm')]
	);
	
	return (
		<div className="movies">
			{children}
			<main className="movies__main">
				<SearchForm
					setMoviesList={setMoviesList}
					onSubmit={handleSubmit(onSubmit)}
					errors={errors}
					inputRegister={register}
					isLoading={isLoading}
				/>
				{isLoading ?
					<Preloader/> : JSON.parse(localStorage.getItem('foundMovies')) &&
					<MoviesCardList
						moviesList={moviesList.map((movie) => {
							const savedId = savedMovies?.find((savedMovie) => savedMovie.movieId === movie.id)?._id;
							
							return {
								...movie,
								image: `https://api.nomoreparties.co/${movie.image.url}`,
								thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
								movieId: movie.id,
								_id: savedId
							};
						})}
						moviesMethods={moviesCardsMethods}
						apiError={apiError}
					>
						{foundMovies > moviesList &&
							<div
								className="moviescardlist__more"
							>
								<button
									onClick={() => setMoreClicksCount(moreClicksCount + 1)}
									className="moviescardlist__more-button hover hover_type_button"
								>Ещё
								</button>
							</div>}
					</MoviesCardList>
				}
			</main>
			<Footer/>
		</div>
	);
}

export default Movies;
