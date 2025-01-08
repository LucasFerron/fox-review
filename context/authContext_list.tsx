import React, { createContext, useContext, useRef } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Input } from '../components/Inputs/index';
import  Flag  from '../Flag/index';
import { Modalize } from 'react-native-modalize';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Star from '../components/Star';

export const AuthContextList: any = createContext({});

const flags = [
  { caption: 'quero ler', color: '#3DBBF6' },
  { caption: 'lendo', color: '#FFD83A' },
  { caption: 'lido', color: '#63C263' },
  { caption: 'esquecido', color: '#000000' },
];

// Função para abrir o modal
export const AuthProviderList = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef?.current?.open();
  };

  const _renderFlags = () => {
    return flags.map((item, index) => (
      <TouchableOpacity key={index}>
        <Flag caption={item.caption} color={item.color} />
      </TouchableOpacity>
    ));
  };

  const _container = () => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <MaterialIcons name="close" size={30} />
            </TouchableOpacity>
            <Text style={styles.title}>Adicionar livro</Text>
            <TouchableOpacity>
              <AntDesign name="check" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Input
              title="Capa do livro:"
              LabelStyle={styles.label}
              height={100}
              width={80}
            />
            <Input title="Título do livro:" LabelStyle={styles.label} />{/*Adicionar os componentes aqui */}
            <Input title="Nome do autor(a):" LabelStyle={styles.label} />{/*Adicionar os componentes aqui */}
            
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{width:'40%'}}>
                  <Input title="Lançamento:" LabelStyle={styles.label} />{/*Adicionar os componentes aqui */}
                </View>
                <View style={{width:'50%'}}>
                  <Input title="Quantidade de páginas:" LabelStyle={styles.label} />{/*Adicionar os componentes aqui */}
                </View>
              </View>
              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View style={{ width: '60%'}}>
                  <Input title="Gênero:" LabelStyle={styles.label} />{/*Adicionar os componentes aqui */}
                </View>
                <View>
                  <Star/>
                </View>
              </View>
              
            
            <View style={styles.containerFlag}>
              <Text style={styles.label}>Situação:</Text>
              <View style={styles.Rowflags}>{_renderFlags()}</View>
            </View>

          </View>

        </View>
      </ScrollView>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{ height: Dimensions.get('window').height / 1.3 }}
        adjustToContentHeight={true}>
        {_container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

// Hook customizado para acessar o contexto
export const useAuth = () => useContext(AuthContextList);

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    width: '100%',
    height: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
  },
  containerFlag: {
    width: '100%',
    padding: 10,
    minWidth: 100,
    
  },
  containerStar:{
    width: '100%',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
    textAlign:'center',
    fontSize:12,
    flexWrap:'wrap'
  },
  Rowflags: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
});
