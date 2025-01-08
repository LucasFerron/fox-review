import React from 'react';
import { style } from './styles';
import { Text, View, Image } from 'react-native';
import Logo from '../../assets/logo.png';

export default function TelaInicial() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.greeting}>Olá leitor(a)</Text>
        <Image style={style.mini_logo} source={Logo} />
      </View>
      <Text style={style.content}>Tela Inicial</Text>
    </View>
  );
}
