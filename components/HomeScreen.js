import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/assets/parking-icon.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Velkommen til Parkeringsappen!</Text>
        <Text style={styles.subtitle}>Find og udlej parkeringspladser nemt og hurtigt</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
          <Text style={styles.buttonText}>Gå til søgning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Log in eller opret dig</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ParkingDetail')}>
          <Text style={styles.buttonText}>Se tilgængelige parkeringspladser</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateParking')}>
          <Text style={styles.buttonText}>Opret ny parkeringsplads</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Gennemsigtig overlay
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#d3d3d3',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
