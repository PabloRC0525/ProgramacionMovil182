import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
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
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>{setUser(data), setLoading(false)})
  },[])
  if(loading){
    return <View style={styles.loading}> 
      <ActivityIndicator size={'large'} color={'green'}/>
      <Text>Cargando...</Text>
    </View>
  }
  return (
    <View style={styles.container}>
    
    <FlatList data={user} 
    renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
    />
      
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'strech',
    justifyContent: 'center',
    paddingTop: 60,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 50,
    borderColor: 'green',
    borderBottomWidth: 1,
  },
  loading:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
});
