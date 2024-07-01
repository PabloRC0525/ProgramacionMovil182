import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, ImageBackground, Text,TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [peliculas, setPeliculas] = useState([
    { key: '1', name: 'The Shawshank Redemption' },
    { key: '2', name: 'The Godfather' },
    { key: '3', name: 'The Dark Knight' },
    { key: '4', name: 'Pulp Fiction' },
    { key: '5', name: 'Forrest Gump' },
    { key: '6', name: 'Inception' },
    { key: '7', name: 'Fight Club' },
    { key: '8', name: 'The Matrix' },
    { key: '9', name: 'The Lord of the Rings: The Return of the King' },
    { key: '10', name: 'Star Wars: Episode V - The Empire Strikes Back' },
    { key: '11', name: 'The Social Network' },
    { key: '12', name: 'The Silence of the Lambs' },
    { key: '13', name: 'Se7en' },
    { key: '14', name: 'Interstellar' },
    { key: '15', name: 'Gladiator' },
  ]);
  const [filtradas, setFiltradas] = useState(peliculas);

  const Buscar = () => {
    if (titulo.trim() === '') {
      setFiltradas(peliculas);
    } else {
      const resultado = peliculas.filter(pelicula => 
        pelicula.name.toLowerCase().includes(titulo.toLowerCase())
      );
      if (resultado.length === 0) {
        Alert.alert('Error', `No se encontró la pelicula: ${titulo}`);
      }
      setFiltradas(resultado);
    }
  };

  return (
    <ImageBackground 
      source={require('./assets/capy.jpg')}
      style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de peliculas:</Text>
      <TextInput style={styles.input} onChangeText={setTitulo} value={titulo} placeholder='Ingrese el titulo a buscar'/>
      <TouchableOpacity style={styles.button} onPress={Buscar}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
      <FlatList 
          data={filtradas} 
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>} 
      />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width:'100%',
    height:'100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  item:{
    padding:10,
    fontsize:24,
    height:50,
    borderColor:'green',
    borderBottomWidth:1,
  },
});
