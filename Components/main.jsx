/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { moviesArray } from '../lib/moviesData';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Main() {
	const insets = useSafeAreaInsets();

	return (
		<ScrollView
			style={{
				flex: 1,
				padding: 20,
				backgroundColor: '#fff',
				marginTop: insets.top,
				marginBottom: insets.bottom,
			}}
		>
			<StatusBar style='auto' />
			<Text style={styles.header}>Popular Movies</Text>

			{/* Renderizar todas las películas */}
			{moviesArray.map((movie) => (
				<View
					key={movie.id}
					style={styles.movieItem}
				>
					<Text style={styles.title}>{movie.title}</Text>
					<Image
						source={{ uri: movie.poster }}
						style={styles.poster}
					/>
					<Text style={styles.overview}>{movie.overview}</Text>
					<Text style={styles.rating}>Rating: {movie.rating}</Text>
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	movieItem: {
		marginBottom: 20,
		padding: 10,
		borderRadius: 8,
		backgroundColor: '#f0f0f0',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	poster: {
		width: '100%',
		height: 300,
		borderRadius: 8,
		marginBottom: 10,
		resizeMode: 'contain',
	},
	overview: {
		fontSize: 16,
		color: '#555',
		marginBottom: 10,
	},
	rating: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
});

export default Main;
