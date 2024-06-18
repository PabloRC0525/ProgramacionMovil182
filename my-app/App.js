import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
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
/* const Texto=({estilo})=>{
  const [contenido,setContenido]= useState('Pecsi')
  const actualizarContenido=()=>{setContenido('State actualizo este texto')}
  return (<Text style={[styles.text, estilo]} onPress={actualizarContenido}>{contenido}</Text>)
} */

  

export default function App() {
  const [text, setText]= useState('Valor Default')
  const [submit, setSubmit]= useState('')
  return (
    <View style={styles.container}>

      <Text>Componente TextInput: {submit}</Text>
      <TextInput style={styles.input} placeholder='Escribe texto...' onChangeText={(t)=>setText(t)} value={text}/>
      <Button title='Presioname...'onPress={()=>{setSubmit(text); alert('Texto enviado')}}/>      

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor:'#DFD7FD',
    width:'80%',
    height:40,
    borderBottomWidth: 1,
    borderBottomColor:'blue',
  },
});
