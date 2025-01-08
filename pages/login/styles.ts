import {StyleSheet, Dimensions} from "react-native";

export const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    
  },
  boxTop:{
    height: Dimensions.get('window').height/2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'

  
  },
  boxMid:{
    height: Dimensions.get('window').height/4,
    width: '100%',
    paddingHorizontal:37,
    backgroundColor: '#FFFFFF'

  },
  boxBottom:{
    height: Dimensions.get('window').height/3,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'

  },
  logo:{
    width: 268,
    height: 268
  },
  titulo:{
    fontWeight: 'bold',
    marginTop: -20,
    fontSize:18
  },
  titleInput:{
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 20
    
  },
  BoxInput:{
    width: '100%',
    height: 40,
    borderRadius:20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#007A83'

  },

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
  textBottom:{
    fontSize:16,
    fontWeight: 'bold',
  },
  
})