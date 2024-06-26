import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';
//import React, { useState } from 'react';
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

  return (
    <View style={styles.container}>
    
      <SectionList 
        sections={[
          {title:'Grupo A',
            data:[
              {key:1,name:'Ivan Isay'},
              {key:2,name:'Victor'},
              {key:3,name:'Elias'},
              {key:4,name:'Alan'},
              {key:5,name:'Pablo'},
              {key:6,name:'Lilian'},
              {key:7,name:'Monse'},]},
          {title:'Grupo B',
            data:[
              {key:8,name:'Isa'},
              {key:9,name:'Diego'},
              {key:10,name:'Maya'},
              {key:11,name:'Juan'},
              {key:12,name:'Fer'},
              {key:13,name:'Gadiel'},
              {key:14,name:'Daniel'},]},
          {title:'Grupo C',
            data:[
              {key:15,name:'Roberto'},
              {key:16,name:'Gregorio'},
              {key:17,name:'Sergio'},
              {key:18,name:'Luis'},
              {key:19,name:'Miguel'},
              {key:20,name:'Pedro'},
              {key:21,name:'Ulises'},]}
            ]}
          renderItem = {({item})=> <Text style={styles.item}> {item.name} </Text>}
          renderSectionHeader = {({section})=> <Text> {section.title} </Text>}
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
  section:{
    fontSize:16,
    fontWeight:'bold',
    backgroundColor:'#eee',
    paddingTop:4,
    paddingBottom:4,
  },
});
