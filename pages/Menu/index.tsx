import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Input } from '../../components/Inputs/index'; 
import { FontAwesome6, MaterialIcons, Octicons } from '@expo/vector-icons';
import { style } from './styles'; 
import { Button } from 'react-native-paper';
import Logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native'; // Navegação entre telas

export default function Menu() {
  const navigation = useNavigation();

  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(true);

  const [username, setUsername] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [genero, setGenero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const sair = () => {
    navigation.reset({
      routes: [{ name: 'Login' }]
    });
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image style={style.mini_logo}
          source={Logo}
        />
      </View>

      <View style={[style.boxMid, {width: '80%'} ]}>
        <Text style={{fontSize:30, fontFamily: 'Georgia, serif', textAlign: 'center'}}>Editar perfil</Text>
        <Input
          value={senha}
          onChangeText={setSenha}
          title="Alterar senha"
          IconLeft={Octicons}
          iconLeftName={showSenha ? 'eye-closed' : 'eye'}
          secureTextEntry={showSenha}
          onIconLeftPress={() => setShowSenha(!showSenha)}
        />

        <Input
          value={username}
          onChangeText={setUsername}
          title="Alterar nome do usuário:"
          IconLeft={FontAwesome6}
          iconLeftName="user"
        />

        <Input
          value={aniversario}
          onChangeText={setAniversario}
          title="Alterar data de aniversário:"
          IconLeft={MaterialIcons}
          iconLeftName="cake"
        />

        <Input
          value={genero}
          onChangeText={setGenero}
          title="Alterar gênero"
          IconLeft={Octicons}
          iconLeftName="person"
        />

        <Input
          value={estado}
          onChangeText={setEstado}
          title="Alterar estado:"
          IconLeft={MaterialIcons}
          iconLeftName="location-on"
        />

        <Input
          value={cidade}
          onChangeText={setCidade}
          title="Alterar cidade:"
          IconLeft={MaterialIcons}
          iconLeftName="location-city"
        />
      </View>

      <View style={style.buttonContainer}>
        <Button mode="contained" onPress={sair} style={style.buttonSair}>
          <Text style={{ color: '#007A83', fontWeight: 'bold' }}>Sair do aplicativo</Text>
        </Button>
      </View>
    </View>
  );
}
