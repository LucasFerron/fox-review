import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';



import {style} from './styles'
import Logo from '../../assets/logo.png'
import {MaterialIcons, FontAwesome6, Octicons} from '@expo/vector-icons' //exporta os ícones
import {Input} from '../../components/Inputs/index' //usando componente input
import {Button} from '../../components/Buttons/index' //usando componente Button
import { useNavigation, NavigationProp } from '@react-navigation/native';//para navegação de telas

export default function Login (){

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin(){
    try{
      
      if(!email || !senha){
        return Alert.alert('Preencha os campos necessários!')
      }
      setLoading(true)
        setTimeout(()=>{
          Alert.alert('Logado com sucesso!'),
          navigation.reset({routes:[{name:"BottomRoutes"}]})
          setLoading(false)
        },2000) 
    } catch (error){
      console.log(error)
    }
  }
  console.log(loading)
  return(
    <View style={style.container}>
    
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.titulo}>Fox Review</Text>
      </View>

      <View style={style.boxMid}>
        <Input
          value={email}
          onChangeText={setEmail}
          title="Login"
          IconRight={FontAwesome6}
          iconRightName="user"
        />
        <Input
          value={senha}
          onChangeText={setSenha}
          title="Senha"
          IconRight={Octicons}
          iconRightName={showSenha ? "eye-closed" : "eye"}
          secureTextEntry={showSenha}
          onIconRightPress={() => setShowSenha(!showSenha)}
        />
      </View>

      <View style={style.boxBottom}>
        <Button
          text="Entrar"
          loading={loading}
          onPress={()=>getLogin()}
        />
        <Text style={style.textBottom}>Não possui uma conta? <Text style={{color: '#FA4F00'}}>Cadastre-se</Text></Text>
      </View>
        
      
    </View>

  )
}