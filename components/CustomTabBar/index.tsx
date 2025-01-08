import React, {} from 'react';
import {TouchableHighlightProps, TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import {style} from './styles';
import {Ionicons, FontAwesome6, Entypo, AntDesign, MaterialIcons, Feather} from '@expo/vector-icons';

export default ({state,navigation})=>{

  const go = (screenName:string)=>{
    navigation.navigate(screenName)
  }

  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabItem} onPress={()=>go("TelaInicial")}>
        <Ionicons
          name='home'
          size={32}
          style={{opacity:state.index === 0?1:0.3, color: "#FA4F00"}}
        />
        <Text style={{fontFamily: 'system-ui'}}>Ínicio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItem} onPress={()=>go("Pesquisar")}>
        <Ionicons
          name='search'
          size={32}
          style={{opacity:state.index === 1?1:0.3, color: "#FA4F00"}}
        />
        <Text style={{fontFamily: 'system-ui'}}>Pesquisar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItem} onPress={()=>go("Perfil")}>
        <Entypo
          name='baidu'
          size={32}
          style={{opacity:state.index === 2?1:0.3, color: "#FA4F00"}}
        />
        <Text style={{fontFamily: 'system-ui'}}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.tabItem} onPress={()=>go("Menu")}>
        <Entypo
          name='menu'
          size={32}
          style={{opacity:state.index === 3?1:0.3, color: "#FA4F00"}}
        />
        <Text style={{fontFamily: 'system-ui'}}>Menu</Text>
      </TouchableOpacity>
     
    </View>
  )
}