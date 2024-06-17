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
const Texto=({estilo})=>{
  const [contenido,setContenido]= useState('Pecsi')
  const actualizarContenido=()=>{setContenido('State actualizo este texto')}
  return (<Text style={[styles.text, estilo]} onPress={actualizarContenido}>{contenido}</Text>)
}
export default function App() {
  return (
    <View style={styles.container}>
  
      <Texto estilo={styles.red}/>
      <Texto estilo={styles.white}/>
      <Texto estilo={styles.blue}/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column-reverse',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text:{
    color:'black',
    fontSize:25,
    height:100,
    width:150,
  },
  red:{
    /* flex:1, */
    backgroundColor:'red',
  },
  white:{
    /* flex:2, */
    backgroundColor:'white',
  },
  blue:{
    /* flex:3, */
    backgroundColor:'blue',
  },
});
