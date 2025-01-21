import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  TabItemButton: {
    backgroundColor: "#D9D9D9",
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 45,
    right: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:9999
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9FEFF',
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height / 8,
    backgroundColor: '#02C4D2',
    justifyContent: 'center',
    paddingHorizontal:20,
    
  },
  mini_logo: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
    position: 'absolute', 
    alignSelf: 'center', 
    top: '25%'
  },
  boxInput:{
    width:'80%',
  },
  boxList:{
    flex:1,
    width:'100%',
    //backgroundColor: '#E9FEFF',
  },
  card:{
    width: '100%',
    height: 60,
    backgroundColor: '#D9D9D9',
    marginTop:6,
    borderRadius:10,
    justifyContent:'center',
    padding:10,

  },
  rowCard:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'


  },
  rowCardLeft:{
    width:'70%',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent: 'flex-start',
    height: 60, 

  },
  capa: {
  width: '100%', 
  height: '100%', 
  resizeMode: 'contain', 
  maxWidth: 50, 
  maxHeight: 50, 
},
  titleCard:{
    fontSize:16,
    fontWeight:'bold'

  },
  descriptionCard:{
    color:'gray'

  },
  button:{
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    width:100,
    marginVertical:10,
    borderRadius:10
  }

});
