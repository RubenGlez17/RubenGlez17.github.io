import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ObjectiveScreen from './screens/ObjectiveScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import NewProfileScreen from './screens/NewProfileScreen';
import TopMoviesScreen from './screens/TopMoviesScreen';
import MovieDetails from './screens/MovieDetails';
import Conclusion from './screens/Conclusion';
import { AppProvider } from './context/AppContext';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>¡Bienvenid@ a nuestra app!</Text>
      <Text style={styles.descriptionText}>Descubre el top 100 de películas.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UserProfile')}
      >
        <Text style={styles.buttonText}>Creadores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TopMovies')}
      >
        <Text style={styles.buttonText}>Top 100 Películas</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const NewProfileTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Objective" component={ObjectiveScreen} />
      <Tab.Screen name="Conclusion" component={Conclusion} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Objective" component={ObjectiveScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TopMovies" component={TopMoviesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ headerShown: false }} />
          <Stack.Screen name="NewProfile">
            {() => (
              <BottomTab.Navigator>
                <BottomTab.Screen name="Profile" component={NewProfileScreen} />
                <BottomTab.Screen name="Description" component={NewProfileTabNavigator} />
              </BottomTab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
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

export default App;
