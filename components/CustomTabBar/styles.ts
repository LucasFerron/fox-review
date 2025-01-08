import {StyleSheet, Dimensions} from "react-native";


export const style = StyleSheet.create({
  tabArea:{
    flexDirection: 'row',
    height: 80,
    justifyContent:'space-around',
    backgroundColor:'#02C4D2',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 10,
  },
  tabItem:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})