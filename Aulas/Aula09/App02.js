import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Estilos = StyleSheet.create({
  centralizado: {
    alignItems: 'center'
  },  

  superior: {
    top: 50
  }
})

const Saudacao = (props) => {
  return(
    <View style={Estilos.centralizado}>
      <Text>Olá {props.nome}, seja bem-vindo!</Text>
    </View>
  )
}

const App = () => {
  return(
    <View style={Estilos.superior}>
      <Saudacao nome='José' />
      <Saudacao nome='Mariana' />
      <Saudacao nome='Gabriel' />
      <Saudacao nome='Fernanda' />
    </View>
  )
}

export default App