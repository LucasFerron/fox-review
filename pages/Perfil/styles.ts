import {StyleSheet, Dimensions} from "react-native";

export const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#E9FEFF'
  },
  header:{
    width:'100%',
    height: Dimensions.get('window').height/8,
    backgroundColor: '#02C4D2',
    justifyContent:'center',
  },
  mini_logo: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
    position: 'absolute', 
    alignSelf: 'center', 
    top: '25%'
  },
  profileTitle: {
    alignSelf:'center',
    alignItems:'center',
    marginTop:16

},
  profileImage:{
    width:200,
    height:200,
    borderRadius:100,
    overflow:'hidden',
    
  },
  image:{
    flex:1,
    width:undefined,
    height: undefined
  },
  text:{
    fontFamily:'HelveticaNeue',
    color:'#52575D'
  },
  subText:{
    fontSize:12,
    color:'#AE5B5BC',
    fontWeight:'500'
  },
  statsContainer:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:32,
  },
  statsBox:{
    alignItems:'center',
    flex:1,
  },
  informations:{
    flexDirection:'row',
    justifyContent:'space-around',
    borderWidth: 2,
    borderColor: '#007A83',
    backgroundColor:'#8CCED3',
    borderRadius:15,
    padding:15
  },
  mediaCapaContainer:{
    width:100,
    height:125,
    borderRadius: 12,
    overflow:'hidden',
    marginVertical:10
  },
    capa: {
    width: '100%',
    height: '100%',
  },

})