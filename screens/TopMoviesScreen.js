import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopMoviesScreen = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com', {
        headers: {
          'X-RapidAPI-Key': '748af0bc2fmsh3d2282ee0f0639ap190c41jsnf6928169320f',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      });

      const data = await response.json();
      setMovies(data.slice(0, 15)); // Mostrar solo los primeros 15 elementos
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToMovieDetails = (id) => {
    navigation.navigate('MovieDetails', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 15 Películas</Text>
      <ScrollView>
        {movies.map(movie => (
          <TouchableOpacity
            key={movie.id}
            style={styles.movieButton}
            onPress={() => navigateToMovieDetails(movie.id)}
          >
            <Text style={styles.movieText}>{movie.id} - {movie.title}</Text>
            <Text style={styles.movieGenre}>{movie.genre}</Text>
            <Text style={styles.movieRating}>Rating: {movie.rating}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MovieDetails')}
      >
        <Text style={styles.buttonText}>Ver Detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movieButton: {
    marginBottom: 10,
  },
  movieText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  movieGenre: {
    fontSize: 14,
    color: 'gray',
  },
  movieRating: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TopMoviesScreen;
