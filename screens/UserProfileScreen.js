import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Perfil de Alumno</Text>
      <Text style={styles.label}>ID: 18212191</Text>
      <Text style={styles.label}>Nombre: Gonzalez Sanchez Ruben Antonio</Text>
      <Text style={styles.label}>Puesto: Desarrollador</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/ruben.jpg')} style={styles.image} />
      </View>
      <Button
        title="Ir a otro Perfil"
        onPress={() => navigation.navigate('NewProfile')}
      />
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
    fontWeight: 'bold',
    marginBottom: 5,
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

export default UserProfileScreen;
