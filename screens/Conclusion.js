import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Conclusion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conclusion</Text>
      <Text style={styles.content}>
        Este proyecto ha sido un desafío laborioso pero gratificante. Durante el proceso, hemos enfrentado diversos retos y hemos aprendido lecciones valiosas que nos han enriquecido como desarrolladores.
      </Text>
      <Text style={styles.content}>
        Trabajar con React Native y las bibliotecas de navegación nos ha permitido comprender mejor los fundamentos de la construcción de aplicaciones móviles multiplataforma. Hemos adquirido experiencia en el manejo de componentes básicos, la navegación entre pantallas y la personalización de la interfaz de usuario.
      </Text>
      <Text style={styles.content}>
        A lo largo de este proyecto, hemos fortalecido nuestras habilidades de resolución de problemas y trabajo en equipo. Además, hemos experimentado el proceso completo de desarrollo de una aplicación móvil, desde el diseño inicial hasta la implementación y las pruebas finales.
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default Conclusion;
