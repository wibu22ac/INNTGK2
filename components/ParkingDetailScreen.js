import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ParkingDetailScreen = () => {
  // Statisk liste over parkeringspladser
  const parkingSpots = [
    {
      id: '1',
      address: 'Nørrebrogade 123, 2200 København N',
      price: '20 DKK/time',
      availability: 'Mandag - Fredag, 08:00 - 18:00',
      description: 'Tæt på byen og velegnet til både kort- og langtidsparkering.',
    },
    {
      id: '2',
      address: 'Østerbrogade 45, 2100 København Ø',
      price: '25 DKK/time',
      availability: 'Alle dage, 24/7',
      description: 'Perfekt til dem, der ønsker nem adgang til offentlig transport.',
    },
    {
      id: '3',
      address: 'Vesterbrogade 76, 1620 København V',
      price: '15 DKK/time',
      availability: 'Lørdag - Søndag, 10:00 - 22:00',
      description: 'Ideel til shopping eller en tur i byen.',
    },
    {
      id: '4',
      address: 'Amagerbrogade 88, 2300 København S',
      price: '18 DKK/time',
      availability: 'Mandag - Lørdag, 08:00 - 20:00',
      description: 'God tilgængelighed og tæt på offentlig transport.',
    },
  ];

  // Render funktion til hver parkeringsplads
  const renderParkingSpot = ({ item }) => (
    <View style={styles.parkingContainer}>
      <Text style={styles.label}>Adresse:</Text>
      <Text style={styles.info}>{item.address}</Text>

      <Text style={styles.label}>Pris pr. time:</Text>
      <Text style={styles.info}>{item.price}</Text>

      <Text style={styles.label}>Tilgængelighed:</Text>
      <Text style={styles.info}>{item.availability}</Text>

      <Text style={styles.label}>Beskrivelse:</Text>
      <Text style={styles.info}>{item.description}</Text>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book denne parkeringsplads</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tilgængelige Parkeringspladser</Text>
      <FlatList
        data={parkingSpots}
        renderItem={renderParkingSpot}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  parkingContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ParkingDetailScreen;

