import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const NewProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Perfil de Alumno</Text>
      <Text style={styles.label}>ID: 19210460</Text>
      <Text style={styles.label}>Nombre: Alvarez Zacarias Adrian Noe</Text>
      <Text style={styles.label}>Puesto: Desarrollador y documentador</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/adrian.jpg')} style={styles.image} />
      </View>
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default NewProfileScreen;
