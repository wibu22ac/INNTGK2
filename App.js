import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importerer NavigationContainer fra @react-navigation/native
import { createStackNavigator } from '@react-navigation/stack'; // Importerer createStackNavigator fra @react-navigation/stack
import HomeScreen from './components/HomeScreen'; // Importerer HomeScreen fra components/HomeScreen.js
import SearchScreen from './components/SearchScreen'; // Importerer SearchScreen fra components/SearchScreen.js
import ProfileScreen from './components/ProfileScreen'; // Importerer ProfileScreen fra components/ProfileScreen.js
import ParkingDetailScreen from './components/ParkingDetailScreen'; // Importerer ParkingDetailScreen fra components/ParkingDetailScreen.js
import CreateParkingScreen from './components/CreateParkingScreen'; // Importerer CreateParkingScreen fra components/CreateParkingScreen.js
import CreateUserScreen from './components/CreateUserScreen'; // Importerer CreateUserScreen fra components/CreateUserScreen.js
import { firebase } from './config/FirebaseConfig'; // Justér stien, hvis nødvendigt

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ParkingDetail" component={ParkingDetailScreen} />
        <Stack.Screen name="CreateParking" component={CreateParkingScreen} />
        <Stack.Screen name="CreateUser" component={CreateUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
