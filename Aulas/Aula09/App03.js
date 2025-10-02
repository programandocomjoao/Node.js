import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },  

  botao: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

class App extends Component {
  state = {
    contador: 0
  }

  contar = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return(
      <View style={Estilos.container}>
        <TouchableOpacity
          style={Estilos.botao}
          onPress={this.contar}
        >
          <Text>Clique aqui</Text>
        </TouchableOpacity>

        <View>
          <Text>Você clicou { this.state.contador } vezes</Text>
        </View>
      </View>
    )
  }
} 

export default App