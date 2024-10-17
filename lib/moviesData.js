/* eslint-disable prettier/prettier */
const apiKey = 'f7fff388947115731ce82b8a6a4fa579';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`;

const moviesArray = [];
const allMovies = [];

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		allMovies.push(...data.results);
		data.results.forEach((movie) => {
			const movieObject = {
				id: movie.id,
				title: movie.title,
				poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
				rating: movie.vote_average,
				overview: movie.overview,
			};

			moviesArray.push(movieObject);
		});

		return moviesArray;
	})
	.catch((error) => {
		console.error('Error:', error);
	});

export { moviesArray, allMovies };
