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

type PropCard = {
  item: number;
  capa: ImageSourcePropType;
  title: string;
  description: string;
  year: number;
  act: string;
  caption: 'Quero ler' | 'Lendo' | 'Lido' | 'Abandonado ';
  nota: '1 estrela' | '2 estrelas' | '3 estrelas ' | '4 estrelas' | '5 estrelas';
};

const data: Array<PropCard> = [
  {
    item: 0,
    capa: quarta,
    title: 'Quarta Asa',
    description: 'Ficção',
    year: 2023,
    act: 'Claudio',
    caption: 'Lendo',
    nota: '1 estrela',
  },
  {
    item: 1,
    capa: quarta,
    title: 'Uma Longa Jornada',
    description: 'Romance',
    year: 2013,
    act: 'Claudio',
    caption: 'Quero ler',
    nota: '1 estrela',
  },
  {
    item: 2,
    capa: quarta,
    title: 'Duna',
    description: 'Ficção',
    year: 1965,
    act: 'Claudio',
    caption: 'Quero ler',
    nota: '1 estrela',
  },
];

export default function Pesquisar() {
  const { onOpen } = useContext(AuthContextList);

  const _renderCard = (item: PropCard) => {
    return (
      <TouchableOpacity style={style.card}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            <Image style={style.capa} source={item.capa} />
            <View>
              <Text style={style.titleCard}>{item.title}</Text>
              <Text style={style.descriptionCard}>{item.description}</Text>
            </View>
          </View>
          <Flag caption="Quero ler" color={'yellow'} />
        </View>
      </TouchableOpacity>
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
          data={data}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item) => item.item.toString()}
          renderItem={({ item }) => _renderCard(item)}
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
