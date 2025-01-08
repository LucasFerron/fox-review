import React, {useContext} from 'react';
import { style } from './styles';

import {Text, View, TouchableOpacity, Image}  from  'react-native';
import Logo from '../../assets/logo.png'
import { ScrollView } from 'react-native-gesture-handler';

export default function Perfil(){
return(
    <View style={style.container}>

      <View style={style.header}>
        <Image style={style.mini_logo}
          source={Logo}
        />
      </View>
      <ScrollView>
        <View style={{alignSelf:'center'}}>
          <View style={style.profileImage}>
            <Image source={require('../../assets/logo_perfil_FR.png')} style={style.image} resizeMode='center'></Image>
          </View>
        </View >

        <View style={style.profileTitle}>
          {/*Adicionar os componentes aqui */}
          <Text style={[style.text, {fontWeight:'200', fontSize:36}]}>Nome (apelido)</Text>
          <Text style={[style.text, {color: '#007A83', fontSize:14}]}>@nome_usuario</Text>
        </View>
        
        <View style={style.informations}>
          {/*Adicionar os componentes aqui*/}
          <View>
            <Text>Gênero:</Text>
            <Text>Aniversário:</Text>
          </View>
          <View>
            <Text>Estado:</Text>
            <Text>Cidade:</Text>
          </View>
        </View>
        <View style={style.statsContainer}>
          <View style={[style.statsBox, { borderColor:"#007A83", borderRightWidth: 1,}]}>
            {/*Adicionar os componentes aqui */}
            <Text style={[style.text, {fontSize:24}]}>50</Text>
            <Text style={[style.text, style.subText]}>Livros</Text>
          </View>
          <View style={style.statsBox}>
            {/*Adicionar os componentes aqui */}
            <Text style={[style.text, {fontSize:24}]}>2200</Text>
            <Text style={[style.text, style.subText]}>Paginômetro</Text>
          </View>

        </View>
        {/*Fazer com que apareça todos os livros que a pessoa adicionou */}
        
          
        <View style={{marginTop:32, flexDirection:'row'}}>
        {/*Arrumar aqui ainda para quando clicar ver as informações do livro */}
        <TouchableOpacity>
          <View style={style.mediaCapaContainer}>
            <Image source={require('../../assets/quarta.jpg')} style={style.capa} resizeMode='contain'/>
          </View>
        </TouchableOpacity>
        
          <View style={style.mediaCapaContainer}>
            <Image source={require('../../assets/quarta.jpg')} style={style.capa} resizeMode='contain'/>
          </View>
          <View style={style.mediaCapaContainer}>
            <Image source={require('../../assets/quarta.jpg')} style={style.capa} resizeMode='contain'/>
          </View>
          <View style={style.mediaCapaContainer}>
            <Image source={require('../../assets/quarta.jpg')} style={style.capa} resizeMode='contain'/>
          </View>

        </View>

        <View style={{marginTop:32, flexDirection:'row'}}>
          
          <View style={style.mediaCapaContainer}>
            <Image source={require('../../assets/quarta.jpg')} style={style.capa} resizeMode='contain'/>
          </View>
          <View style={style.mediaCapaContainer}>
            <Image source={require('../../assets/quarta.jpg')} style={style.capa} resizeMode='contain'/>
          </View>
          <View style={style.mediaCapaContainer}>
            <Image source={require('../../assets/quarta.jpg')} style={style.capa} resizeMode='contain'/>
          </View>
          <View style={style.mediaCapaContainer}>
            <Image source={require('../../assets/quarta.jpg')} style={style.capa} resizeMode='contain'/>
          </View>

        </View>

      </ScrollView>
    </View>
  )

}