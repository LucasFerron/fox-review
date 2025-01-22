import React, { createContext, useContext, useRef, useState, useEffect } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Flag from '../Flag/index';
import Star from '../components/Star';
import { Modalize } from 'react-native-modalize';
import { Input } from '../components/Inputs/index';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import CustomDateTimerPicker from '../components/CustomDateTimePicker';
// Banco de dados
import { database } from '../config/firebase';
import { ref, push, onValue, getDatabase, remove, update } from 'firebase/database';

// Contexto
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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState('')

  const [newBook, setNewBook] = useState<any[]>([]); // Estado para armazenar os livros recuperados
  const [dataFilter, setDataFilter] = useState<any[]>([]); // Adicionado o estado dataFilter

  const onOpen = () => modalizeRef?.current?.open();
  const onClose = () => modalizeRef?.current?.close();

  const _renderFlags = () => {
    return (
      flags.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedFlag(item.caption)}>
          <Flag
            caption={item.caption}
            color={item.color}
            selected={item.caption === selectedFlag}
          />
        </TouchableOpacity>
      ))
    );
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleSave = async () => {
    try {
      if (!title || !autor || !qtdPaginas || !genero || !selectedFlag) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
      }
  
      const newBookData = {
        title,
        autor,
        qtdPaginas,
        genero,
        flag: selectedFlag,
        lançamento: selectedDate.toISOString(),
      };
      const booksRef = ref(database, 'books');
  
      await push(booksRef, newBookData);
  
      alert("Livro salvo com sucesso!");
  
      setTitle('');
      setAutor('');
      setQtdPaginas(0);
      setGenero('');
      setSelectedFlag('');
      setSelectedDate(new Date());
      onClose(); // Fecha o modal
    } catch (error) {
      console.error("Erro ao salvar o livro: ", error);
      alert("Houve um erro ao salvar o livro. Tente novamente.");
    }
  };

  useEffect(() => { //adiciona o item no banco de dados
    const booksRef = ref(database, 'books');
    onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      const booksList = [];
      for (let id in data) {
        booksList.push({ id, ...data[id] });
      }
      setNewBook(booksList);
      setDataFilter(booksList); 
    });
  }, []); 

  const excluir = (id: string) => {
    const db = getDatabase(); 
    const bookRef = ref(db, 'books/' + id); 
  
    remove(bookRef) // Remove o item do banco de dados
      .then(() => {
        console.log('Removido');

        setNewBook((value) => value.filter((item) => item.id !== id));
        setDataFilter((value) => value.filter((item) => item.id !== id));
      })
      .catch((error) => console.error('Erro ao exluir livro :', error));
  };

  const handleEdit = (bookId: string) => {
    // Carregar os dados do livro que está sendo editado
    const book = newBook.find((item) => item.id === bookId);
    if (book) {
      setTitle(book.title);
      setAutor(book.autor);
      setQtdPaginas(book.qtdPaginas);
      setGenero(book.genero);
      setSelectedFlag(book.flag);
      setSelectedDate(new Date(book.lançamento)); 
      setSelectedBookId(bookId);
      onOpen();
    }
  };

  const handleUpdate = async () => {
    try {
      if (!title || !autor || !qtdPaginas || !genero || !selectedFlag) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
      }

      const updatedBookData = {
        title,
        autor,
        qtdPaginas,
        genero,
        flag: selectedFlag,
        lançamento: selectedDate.toISOString(),
      };

      const bookRef = ref(database, 'books/' + selectedBookId); // Referência para o livro específico
      await update(bookRef, updatedBookData);

      alert("Livro atualizado com sucesso!");

      const updatedBooks = newBook.map((book) =>
        book.id === selectedBookId ? { ...book, ...updatedBookData } : book
      );
      setNewBook(updatedBooks);
      setDataFilter(updatedBooks);

      setTitle('');
      setAutor('');
      setQtdPaginas(0);
      setGenero('');
      setSelectedFlag('');
      setSelectedDate(new Date());
      setSelectedBookId('');
      onClose(); 
    } catch (error) {
      console.error("Erro ao atualizar o livro: ", error);
      alert("Houve um erro ao atualizar o livro. Tente novamente.");
    }
  };

  const _container = () => {
    return (
      <ScrollView>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View>
            <View style={styles.header}>
              <TouchableOpacity onPress={onClose}>
                <MaterialIcons name="close" size={30} />
              </TouchableOpacity>
              <Text style={styles.title}>Adicionar livro</Text>
              <TouchableOpacity onPress={selectedBookId ? handleUpdate : handleSave}>
                <AntDesign name="check" size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Input
                title="Capa do livro:"
                labelStyle={styles.label}
                height={100}
                width={80}
              />
              <Input
                title="Título do livro:"
                labelStyle={styles.label}
                value={title}
                onChangeText={setTitle}
              />
              <Input
                title="Nome do autor(a):"
                labelStyle={styles.label}
                value={autor}
                onChangeText={setAutor}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '40%' }}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <Input
                      title="Lançamento:"
                      labelStyle={styles.label}
                      editable={false}
                      value={selectedDate.toLocaleDateString()}
                      onPress={() => setShowDatePicker(true)}
                    />
                  </TouchableOpacity>
                </View>
                <CustomDateTimerPicker
                  onDateChange={handleDateChange}
                  setShow={setShowDatePicker}
                  show={showDatePicker}
                  type={'date'}
                />
                <View style={{ width: '50%' }}>
                  <Input
                    title="Quantidade de páginas:"
                    labelStyle={styles.label}
                    value={qtdPaginas !== null ? qtdPaginas.toString() : ""}
                    onChangeText={(text) => setQtdPaginas(Number(text))}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '60%' }}>
                  <Input
                    title="Gênero:"
                    labelStyle={styles.label}
                    value={genero}
                    onChangeText={setGenero}
                  />
                </View>
                <View>
                  <Star />
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
    <AuthContextList.Provider value={{ onOpen, newBook, excluir, handleEdit }}>
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
  containerStar: {
    width: '100%',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12,
    flexWrap: 'wrap',
  },
  Rowflags: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
});
