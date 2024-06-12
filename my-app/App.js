import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
/*
const Texto=(props)=>{
  const {contenido}= props
  return (<Text>{contenido}</Text>)
}
  */
 /*
const Texto=(props)=>{
  const {children}= props
  return (<Text>{children}</Text>)
}
  */
const Texto=()=>{
  const [contenido,setContenido]= useState('Hola Mundo!')
  const actualizarContenido=()=>{setContenido('State actualizo este texto')}
  return (<Text onPress={actualizarContenido}>{contenido}</Text>)
}
export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido={'Hola Mundo!'}></Texto>
      <Texto contenido={'React Native'}/>
      <Button title='presioname' color='#000000' ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
