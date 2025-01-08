import {StyleSheet, Dimensions} from "react-native";


export const style = StyleSheet.create({
    button:{
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA4F00',
    borderRadius: 20,
    //sombra no botão ENTRAR
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  textButton:{
    fontSize: 16,
    color: '#FFFF',
    fontWeight: 'bold'
  },
})