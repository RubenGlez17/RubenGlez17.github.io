import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com', {
        headers: {
          'X-RapidAPI-Key': '748af0bc2fmsh3d2282ee0f0639ap190c41jsnf6928169320f',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      });
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Películas</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Text style={styles.rank}>{item.rank}</Text>
            <View style={styles.movieInfo}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
          </View>
        )}
        keyExtractor={item => item.rank.toString()}
      />
      <Button title="Volver" onPress={handleGoBack} />
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
  movieItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rank: {
    width: 40,
    marginRight: 10,
    fontSize: 16,
  },
  movieInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  thumbnail: {
    width: 50,
    height: 70,
    marginLeft: 10,
  },
});

export default MovieDetails;
