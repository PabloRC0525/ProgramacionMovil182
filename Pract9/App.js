import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import Prueba from './screens/Prueba';

export default function App() {

  return (
    /* <ImageBackground 
      source={require('./assets/capy.jpg')} // Asegúrate de que esta ruta sea correcta
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Nombre:</Text>
        <TextInput style={styles.input} onChangeText={setNombre} value={nombre} />

        <Text style={styles.title}>Email:</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />

        <Text style={styles.title}>Password:</Text>
        <TextInput style={styles.input} onChangeText={setPassword} value={password} secureTextEntry={true} />

        <TouchableOpacity style={styles.button} onPress={Guardar}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ImageBackground> */
    <Prueba/>
  );
}

/* const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'green',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
    width: '80%',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
 */