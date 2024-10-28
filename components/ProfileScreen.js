import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { username, email } = route.params || {}; // Modtag brugeroplysninger fra params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brugerprofil</Text>
      {username && email ? (
        <>
          <Text style={styles.label}>Brugernavn:</Text>
          <Text style={styles.info}>{username}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{email}</Text>
        </>
      ) : (
        <Text style={styles.errorText}>Ingen brugerdata fundet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
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
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default ProfileScreen;
