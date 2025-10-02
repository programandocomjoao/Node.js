import React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, Image } from 'react-native';

const Estilos = StyleSheet.create({
  imagem: {
    width: 200,
    height: 200
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 20
  },

  campo: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20
  }
})

const App = () => {
  return(
    <ScrollView style={ Estilos.container }>
      <Text style={ Estilos.titulo }>Sistema Solar</Text>

      <View>
        <Text>Planeta Terra</Text>
        <Image 
          source={
            {uri: 'https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg'}
          }
          style={ Estilos.imagem }
        />        
      </View> 

      <TextInput 
        style={ Estilos.campo } 
        defaultValue='Digite o nome de um planeta'  
      />

      <Text style={{ width: 350 }}>A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta, permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta. As propriedades físicas do planeta, bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período. Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos.</Text>
    </ScrollView>
  )
}

export default App