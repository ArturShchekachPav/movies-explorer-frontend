import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import {
	useEffect,
	useState
} from 'react';
import main from '../Main/Main';
import {useForm} from 'react-hook-form';
import moviesApi from '../../utils/MoviesApi';

export function Movies({
	onSidebarClose,
	savedMovies,
	onSaveMovie,
	onMovieDelete
}) {
	const [moviesList, setMoviesList] = useState([]);
	const [width, setWidth] = useState(window.innerWidth);
	const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem('foundMovies')) || []);
	const [moreClicksCount, setMoreClicksCount] = useState(1);
	const [k, setK] = useState(16)
	
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
	
	console.log(1);
	
	
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
		
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize",
				handleResizeWindow
			);
		}
		},
		[]
	);
	
	useEffect(() => {
		if(width > 1024) {
			setK(16);
			setMoviesList(foundMovies.slice(0, k * moreClicksCount))
		} else if(width > 500) {
			setK(8);
			setMoviesList(foundMovies.slice(0, k * moreClicksCount))
		} else {
			setK(5);
			console.log(2)
			setMoviesList(foundMovies.slice(0, k * moreClicksCount))
		}
	}, [width, foundMovies, moreClicksCount])
	
	function onSubmit(searchData) {
		const {
			search,
			shortFilm
		} = searchData;
		
		moviesApi.getAllMovies()
			.then(allMovies => {
				const foundMovies = allMovies.filter(({
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
				
				setFoundMovies(foundMovies);
				setMoreClicksCount(1);
				
				localStorage.setItem('foundMovies',
					JSON.stringify(foundMovies)
				);
				localStorage.setItem('lastSearch',
					JSON.stringify(searchData)
				);
			});
	}
	
	return (
		<div className="movies">
			<Header
				onSidebarClose={onSidebarClose}
				isLoggedIn={true}
			/>
			<main className="movies__main">
				<SearchForm
					setMoviesList={setMoviesList}
					onSubmit={handleSubmit(onSubmit)}
					errors={errors}
					inputRegister={register}
				/>
				{width}
				<MoviesCardList possibleMore={true}>
					{moviesList?.length ?
						moviesList.map(({
							director,
							country,
							duration,
							year,
							description,
							image,
							trailerLink,
							id,
							nameRU,
							nameEN
						}) => {
							const savedId = savedMovies?.find((savedMovie) => savedMovie.movieId === id)?._id;
							console.log(savedId);
							
							return <MoviesCard
								movieData={{
									country,
									director,
									duration,
									year,
									description,
									image: `https://api.nomoreparties.co/${image.url}`,
									trailerLink,
									thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
									movieId: id,
									nameRU,
									nameEN
								}}
								key={id}
								savedStatus={Boolean(savedId)}
								savedId={savedId}
								onDelete={onMovieDelete}
								onSave={onSaveMovie}
							/>;
						}) :
						<h1>Not found</h1>}
				</MoviesCardList>
				<div
					className={`moviescardlist__more ${foundMovies.length > moreClicksCount * k ?
						'' :
						'moviescardlist__more_disabled'}`}
				>
					<button onClick={() => setMoreClicksCount(moreClicksCount + 1)}
						className={`moviescardlist__more-button ${foundMovies.length > moreClicksCount * k ?
							'' :
							'moviescardlist__more-button_disabled'} hover hover_type_button`}
					>Ещё
					</button>
				</div>
			</main>
			<Footer/>
		</div>
	);
}

export default Movies;
