import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreateParkingScreen = () => {
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateParking = () => {
    // Her kan du tilføje funktionalitet til at oprette parkeringspladsen, fx sende data til en backend.
    alert('Parkeringsplads oprettet!');
    setAddress('');
    setPrice('');
    setAvailability('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opret Ny Parkeringsplads</Text>

      <TextInput
        style={styles.input}
        placeholder="Adresse"
        placeholderTextColor="#aaa"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="Pris pr. time (DKK)"
        placeholderTextColor="#aaa"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Tilgængelighed (f.eks. Man-Fre, 08:00-18:00)"
        placeholderTextColor="#aaa"
        value={availability}
        onChangeText={setAvailability}
      />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Beskrivelse"
        placeholderTextColor="#aaa"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.createButton} onPress={handleCreateParking}>
        <Text style={styles.createButtonText}>Opret Parkeringsplads</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
    marginBottom: 15,
  },
  descriptionInput: {
    height: 100, // Større højde for beskrivelse
    textAlignVertical: 'top', // Sikrer at teksten starter øverst
  },
  createButton: {
    backgroundColor: '#20b2aa',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateParkingScreen;
