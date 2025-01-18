import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { style } from './styles';
import { AuthContextList } from '../../context/authContext_list';
import { Input } from '../../components/Inputs/index';
import Logo from '../../assets/logo.png';
import quarta from '../../assets/quarta.jpg';
import  Flag from '../../Flag/index';
import { ImageSourcePropType } from 'react-native';


export default function Pesquisar() {
 
  const {onOpen, newBook} = useContext<AuthContextType>(AuthContextList);
 
  const _renderCard = (item: PropCard) => {
    const cores =
    item.flag == 'quero ler'? '#3DBBF6':
    item.flag == 'lendo'? '#FFD83A':
    item.flag == 'lido'? '#63C263':
    item.flag == 'esquecido'? '#000000': 'blue'//Arrumar cores
    return (
      <TouchableOpacity style={style.card}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            {/* <Image style={style.capa} source={item.capa} /> */}
            <View>
              <Text style={style.titleCard}>{item.title}</Text>
              <Text style={style.descriptionCard}>{item.genero}</Text>
            </View>
          </View>
          <Flag caption={item.flag} color={cores} />
          {/* ajustar cor ainda */}
        </View>
      </TouchableOpacity>
    );
  };

  // ve agora.
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
          renderItem={({ item }) => {return (_renderCard(item))}}
        />
      </View>
      <TouchableOpacity style={style.TabItemButton} onPress={() => onOpen()}>
        <View>
          <Entypo name="plus" color="#FA4F00" size={60} />
        </View>
      </TouchableOpacity>
    </View>
  );
  // isso e de boa resolver , vamos arrumar as props. suas props deve ter mesmo caractertista do banco 
}
