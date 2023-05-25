import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ObjectiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Objetivo de la Aplicación</Text>
      <Text style={styles.description}>
        El objetivo de esta aplicación es brindar a los usuarios la posibilidad de explorar y conocer el top 100 de películas según nuestra API. 
      </Text>
      <Text style={styles.description}>
        La aplicación permite acceder a información detallada sobre cada película, como el título, la descripción y la clasificación. Además, se muestran imágenes de cada película para brindar una experiencia visual atractiva.
      </Text>
      <Text style={styles.description}>
        Nuestro objetivo es proporcionar a los usuarios una forma sencilla y cómoda de descubrir las películas más populares y obtener información relevante sobre ellas.
      </Text>
      <Text style={styles.description}>
        ¡Explora el top 100 de películas y sumérgete en el emocionante mundo del cine!
      </Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ObjectiveScreen;
