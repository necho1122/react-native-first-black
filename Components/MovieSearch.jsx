/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	ScrollView,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Para manejar la navegación
import { moviesArray } from '../lib/moviesData';

function MoviesSearch() {
	const [searchQuery, setSearchQuery] = useState('');
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation(); // Para navegar al componente de detalles

	// Filtrar películas según la búsqueda del usuario
	useEffect(() => {
		if (searchQuery.length > 0) {
			setLoading(true);

			// Simular un retraso para ver el indicador de carga
			const timeoutId = setTimeout(() => {
				const results = moviesArray.filter((movie) =>
					movie.title.toLowerCase().includes(searchQuery.toLowerCase())
				);
				setFilteredMovies(results);
				setLoading(false);
			}, 500); // Retraso de 500ms

			return () => clearTimeout(timeoutId); // Limpiar el timeout si el usuario sigue escribiendo
		} else {
			setFilteredMovies([]); // Limpiar los resultados si no hay búsqueda
		}
	}, [searchQuery]);

	// Función para manejar el clic en una película y navegar al componente de detalles
	const handleMoviePress = (movieId) => {
		navigation.navigate('MovieDetails', { movieId });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Buscar Película</Text>

			{/* Input de búsqueda */}
			<TextInput
				style={styles.searchInput}
				placeholder='Buscar...'
				onChangeText={setSearchQuery}
				value={searchQuery}
			/>

			{/* Indicador de carga */}
			{loading && (
				<ActivityIndicator
					size='large'
					color='#0000ff'
					style={styles.loader}
				/>
			)}

			{/* Resultados de búsqueda */}
			<ScrollView>
				{filteredMovies.length > 0
					? filteredMovies.map((movie) => (
							<TouchableOpacity
								key={movie.id}
								style={styles.movieItem}
								onPress={() => handleMoviePress(movie.id)} // Navegar al componente de detalles
							>
								<Text style={styles.title}>{movie.title}</Text>
								<Text style={styles.overview}>{movie.overview}</Text>
							</TouchableOpacity>
						))
					: searchQuery.length > 0 &&
						!loading && (
							<Text style={styles.noResults}>No se encontraron películas.</Text>
						)}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff',
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	searchInput: {
		height: 40,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 10,
		marginBottom: 20,
	},
	movieItem: {
		marginBottom: 20,
		padding: 10,
		borderRadius: 8,
		backgroundColor: '#f0f0f0',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	overview: {
		fontSize: 14,
		color: '#555',
	},
	noResults: {
		fontSize: 16,
		color: '#333',
		textAlign: 'center',
		marginTop: 20,
	},
	loader: {
		marginVertical: 20,
	},
});

export default MoviesSearch;
