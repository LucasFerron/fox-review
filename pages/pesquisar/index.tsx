import React, { useContext, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { style } from './styles';
import { AuthContextList } from '../../context/authContext_list';
import { Input } from '../../components/Inputs/index';
import Logo from '../../assets/logo.png';
import quarta from '../../assets/quarta.jpg';
import  Flag from '../../Flag/index';
import { ImageSourcePropType } from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';


export default function Pesquisar() {
 
  const {onOpen, newBook, excluir, handleEdit} = useContext<AuthContextType>(AuthContextList);
  const swipeableRefs = useRef([]);

  const renderRightActions =()=>{
    return (
      <View style={style.button}>
        <AntDesign
          name="delete"
          size={20}
          color={"#FFF"}
          
        />
      </View>
    )
  }

  const renderLeftActions =()=>{
    return (
      <View style={[style.button, {backgroundColor:'#42C3FF'}]}>
        <AntDesign
          name="edit"
          size={20}
          color={"#FFF"}
        />
      </View>
    )
  }
const handleSwipeOpen = (directions: 'right' | 'left', item, index)=>{
  if (directions == 'right'){
    excluir(item.id)
    
  }else if (directions == 'left'){
    handleEdit(item.id)
  }

}

  const _renderCard = (item: PropCard, index) => {
    const cores =
    item.flag == 'quero ler'? '#3DBBF6':
    item.flag == 'lendo'? '#FFD83A':
    item.flag == 'lido'? '#63C263':
    item.flag == 'esquecido'? '#000000': 'blue'//Arrumar cores
    return (
      <Swipeable
        ref={(ref) => swipeableRefs.current[index] = ref}
        key={index}
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
        onSwipeableOpen={(directions)=>handleSwipeOpen(directions, item, index)}
      >
        <TouchableOpacity style={style.card}>
          <View style={style.rowCard}>
            <View style={style.rowCardLeft}>
              {/* <Image style={style.capa} source={item.capa} /> */}
              <View>
                <Text style={style.titleCard}>{item.title}</Text>
                <Text style={style.descriptionCard}>{item.genero}</Text>
              </View>
            </View>
            <Flag
              caption={item.flag}
              color={cores}
            />
          </View>
        </TouchableOpacity>
      </Swipeable>
      
    );
  };

  return (
      <View style={style.container}>
      <View style={style.header}>
        <Image style={style.mini_logo} source={Logo} />
      </View>
      <View style={style.boxInput}>
        <Input IconRight={MaterialIcons} iconRightName="search" />
      </View>
      <View style={style.boxList}>
        <FlatList
          data={newBook}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {return (_renderCard(item,index))}}
        />
      </View>
      <TouchableOpacity style={style.TabItemButton} onPress={() => onOpen()}>
        <View>
          <Entypo name="plus" color="#FA4F00" size={60} />
        </View>
      </TouchableOpacity>
    </View>
  );

}
