import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const parkingSpots = [
    { id: '1', address: 'Nørrebrogade 123, 2200 København N', price: '20 DKK/time', availability: 'Mandag - Fredag, 08:00 - 18:00', description: 'Tæt på byen og velegnet til både kort- og langtidsparkering.' },
    { id: '2', address: 'Østerbrogade 45, 2100 København Ø', price: '25 DKK/time', availability: 'Alle dage, 24/7', description: 'Perfekt til dem, der ønsker nem adgang til offentlig transport.' },
    { id: '3', address: 'Vesterbrogade 76, 1620 København V', price: '15 DKK/time', availability: 'Lørdag - Søndag, 10:00 - 22:00', description: 'Ideel til shopping eller en tur i byen.' },
  ];

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // Hvis søgefeltet er tomt, send alle parkeringspladser til ParkingDetailScreen
      navigation.navigate('ParkingDetail', { parkingSpots });
    } else {
      // Find en parkeringsplads der matcher søgeinputtet
      const foundSpot = parkingSpots.find((spot) =>
        spot.address.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (foundSpot) {
        navigation.navigate('ParkingDetail', { parkingSpots: [foundSpot] });
      } else {
        alert('Ingen parkeringspladser fundet med den angivne adresse.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find din Parkeringsplads</Text>
      <TextInput
        style={styles.input}
        placeholder="Søg efter by eller adresse"
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Søg</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
