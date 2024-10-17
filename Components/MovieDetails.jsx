import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { allMovies } from '../lib/moviesData';

const fetchMovieDetails = async (movieId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const movieDetails = allMovies.find((movie) => movie.id === movieId);
			resolve(movieDetails);
		}, 1000); // Simulando un retraso de 1 segundo
	});
};

const MovieDetails = ({ route }) => {
	const { movieId } = route.params;
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchMovieDetails(movieId).then((data) => {
			setMovie(data);
			setLoading(false);
		});
	}, [movieId]);

	if (loading) {
		return (
			<ActivityIndicator
				size='large'
				color='#0000ff'
			/>
		);
	}

	if (!movie) {
		return (
			<View style={styles.container}>
				<Text>No movie found</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{movie.title}</Text>
			<Image
				source={{ uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}` }}
				style={{ width: 200, height: 300, marginBottom: 16 }}
			/>
			<Text style={styles.description}>{movie.overview}</Text>
			<Text style={styles.details}>Vote Average: {movie.vote_average}</Text>
			<Text style={styles.details}>Release Date: {movie.release_date}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	description: {
		fontSize: 16,
		marginBottom: 16,
	},
	details: {
		fontSize: 14,
		color: '#555',
	},
});

export default MovieDetails;
