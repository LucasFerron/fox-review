import { StyleSheet, Dimensions } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9FEFF',
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height / 8, // Altura do cabeçalho
    backgroundColor: '#02C4D2',
    justifyContent: 'center', // Centraliza os elementos no eixo vertical
  },
  mini_logo: {
    width: 95,
    height: 95,
    resizeMode: 'contain', // Mantém a proporção da imagem
    position: 'absolute', // Fixa a posição da logo no centro
    alignSelf: 'center', // Centraliza horizontalmente no pai
    top: '25%'

  },
  greeting: {
    fontSize: 20,
    color: '#000000',
    top: '25%',
    marginLeft: 20, // Mantém o texto alinhado à esquerda
  },
  content: {
    fontSize: 18,
    marginTop: 20,
    color: '#333',
  },
});
