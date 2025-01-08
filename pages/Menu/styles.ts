import { StyleSheet, Dimensions } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#E9FEFF'
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height / 8,
    backgroundColor: '#02C4D2',
    justifyContent: 'center',
  },
  mini_logo: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
  },
  boxMid: {
    marginBottom: 30,
  },
  boxBottom: {
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,

  },
  buttonSair: {
    backgroundColor: '#02C4D2',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textBottom: {
    fontSize: 16,
    marginTop: 10,
  },
});
