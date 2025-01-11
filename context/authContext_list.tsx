import React, { createContext, useContext, useRef, useState } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Input } from '../components/Inputs/index';
import  Flag  from '../Flag/index';
import { Modalize } from 'react-native-modalize';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Star from '../components/Star';
import CustomDateTimerPicker from '../components/CustomDateTimePicker';

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

  const [title, setTitle] = useState('');
  const [autor, setAutor] = useState('');
  const [qtdPaginas, setQtdPaginas] = useState<number>(0);
  const [genero, setGenero] = useState('');

  const [selectedFlag, setSelectedFlag] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)

  const onOpen = () => {
    modalizeRef?.current?.open();
  };

  const onClose = () => {
    modalizeRef?.current?.close();
  }

  const _renderFlags = () => {
    return (
      flags.map((item, index) => (
        <TouchableOpacity key={index}>
          <Flag
            caption={item.caption}
            color={item.color}
             selected
          />
        </TouchableOpacity>
    )));
  };
  const handleDateChange = (date) =>{
    setSelectedDate(date);
  };

  const _container = () => {
    return (
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios'?'padding':'height'}
        >
          <View >
            <View style={styles.header}>
              <TouchableOpacity onPress={()=>onClose()}>
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
              <Input
                title="Título do livro:"
                LabelStyle={styles.label}
                value={title}
                onChangeText={setTitle}
              />
              <Input
                title="Nome do autor(a):"
                LabelStyle={styles.label} 
                value={autor}
                onChangeText={setAutor}
              />
              
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                  <View style={{width:'40%'}}>
                    <TouchableOpacity onPress={()=>setShowDatePicker(true)}>
                  <Input
                        title="Lançamento:"
                        LabelStyle={styles.label}
                        editable={false}
                        value={selectedDate.toLocaleDateString()}
                        onPress={()=>setShowDatePicker(true)}
                      
                      />
                    </TouchableOpacity>
                  </View>
                  <CustomDateTimerPicker
                      onDateChange={handleDateChange}
                      setShow={setShowDatePicker}
                      show={showDatePicker}
                      type={'date'}
                    />
                  <View style={{width:'50%'}}>
                    <Input
                      title="Quantidade de páginas:"
                      LabelStyle={styles.label}
                      value={qtdPaginas !== null ? qtdPaginas.toString() : ""} // Converte para string
                      onChangeText={(text) => setQtdPaginas(Number(text))} // Converte para número
                      keyboardType="numeric" // Mostra teclado numérico
                    />
                  </View>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                  <View style={{ width: '60%'}}>
                    <Input
                      title="Gênero:"
                      LabelStyle={styles.label}
                      value={genero}
                      onChangeText={setGenero}
                    />
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
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };

  return (
    <AuthContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        childrenStyle={{ height: Dimensions.get('window').height/1.7}}
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
