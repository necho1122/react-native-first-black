/* eslint-disable prettier/prettier */
const apiKey = 'f7fff388947115731ce82b8a6a4fa579';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`;

const moviesArray = [];

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		data.results.forEach((movie) => {
			const movieObject = {
				id: movie.id,
				title: movie.title,
				poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
				rating: movie.vote_average,
				overview: movie.overview,
			};

			moviesArray.push(movieObject);
		});

		console.log(moviesArray);

		return moviesArray;
	})
	.catch((error) => {
		console.error('Error:', error);
	});

export { moviesArray };
