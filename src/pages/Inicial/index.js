import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Inicial = ({ onButtonPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tudo sobre Controle</Text>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>Ir para a próxima tela</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A5ACD', // Cor de fundo roxa
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Cor do texto branca
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue', // Cor de fundo do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Inicial;
