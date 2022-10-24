import * as React from 'react';
import {ImageBackground, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
       <ImageBackground source={require('./assets/fundo.jpg')} style={styles.imageBackground}>
      <Text style={styles.titulo}>Louvre Artworks</Text>
      <Text style={styles.subTitulo}>Obras impactantes expostas no museu Louvre em Paris</Text>
      <ScrollView>


      <Text style={styles.obra}>La Mappa dell'Inferno</Text>
      <Text style={styles.autor}>Sandro Botticelli</Text>
      <View style={styles.imagem}>
         <Image style={styles.img} source={require("./assets/dante.png")}/>
      </View>



      <Text style={styles.obra}>Níkē tes Samothrakes</Text>
      <Text style={styles.autor}>Desconhecido</Text>
      <View style={styles.imagem}>
      <Image style={styles.img} source={require("./assets/es.jpg")}/>
      </View>


      <Text style={styles.obra}>La Liberté guidant le peuple</Text>
      <Text style={styles.autor}>Eugène Delacroix</Text>
      <View style={styles.imagem}>
      <Image style={styles.img} source={require("./assets/libert.jpg")}/>
      </View>


      <Text style={styles.obra}>La Gioconda</Text>
      <Text style={styles.autor}>Leonardo da Vinci</Text>
      <View style={styles.imagem}>
      <Image style={styles.img} source={require("./assets/monalisa.jpg")}/>
      </View>

      <Text style={styles.obra}>Noite Estrelada Sobre o Ródano</Text>
      <Text style={styles.autor}>Vicent Van Gogh</Text>
      <View style={styles.imagem}>
      <Image style={styles.img} source={require("./assets/van")}/>
      </View>

      </ScrollView>
      </ImageBackground>
    </View> 
     );
}

const styles = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor: '#000000',
  justifyContent: 'center',
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },

  titulo:{
    fontSize:35,
    color:"#fff",
    fontWeight:"900",
    marginBottom:10,
    marginTop:30,
    textAlign:"center",
  },

  subTitulo:{
    fontSize:17,
    paddingBottom:10,
    color:"#fff",
    marginHorizontal:5,
    textAlign:"center",
  },

  img:{
    width:300,
    height:400,
  },

  obra:{
    fontSize:19,
    marginTop:30,
    textAlign:"center",
    color:"#fff",
  },

autor:{
    fontSize:14,
    marginTop:5,
    marginBottom:10,
    textAlign:"center",
    color:"#fff",
  },

  imagem:{
    alignItems:"center",
  }
}
);
