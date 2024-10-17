import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import Main from './Components/main';
import MovieDetails from './Components/MovieDetails';
import MoviesSearch from './Components/MovieSearch';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bienvenido a la App de Películas</Text>
			<Button
				title='Ver todas las películas'
				onPress={() => navigation.navigate('Main')}
			/>
			<Button
				title='Buscar una película'
				onPress={() => navigation.navigate('MoviesSearch')}
				style={styles.button}
			/>
		</View>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				{/* Pantalla principal con opciones */}
				<Stack.Screen
					name='Home'
					component={HomeScreen}
				/>

				{/* Pantalla para ver todas las películas */}
				<Stack.Screen
					name='Main'
					component={Main}
				/>

				{/* Pantalla de búsqueda de películas */}
				<Stack.Screen
					name='MoviesSearch'
					component={MoviesSearch}
				/>

				{/* Pantalla de detalles de la película */}
				<Stack.Screen
					name='MovieDetails'
					component={MovieDetails}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	button: {
		marginTop: 10,
	},
});
