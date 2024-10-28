import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { firebase } from '../config/FirebaseConfig'; // Importer firebase konfiguration

const CreateUserScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    try {
      // Opret bruger i Firebase Authentication
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;

      // Gem brugerdata i Firestore
      await firebase.firestore().collection('users').doc(userId).set({
        username,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Bruger oprettet!', 'Din bruger er blevet oprettet.');
      navigation.navigate('Profile'); // Navigér tilbage til ProfileScreen
    } catch (error) {
      Alert.alert('Fejl', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opret ny bruger</Text>
      <TextInput
        style={styles.input}
        placeholder="Brugernavn"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Adgangskode"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Opret bruger</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
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
  registerButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateUserScreen;
