import React, { useContext, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { style } from './styles';
import { AuthContextList } from '../../context/authContext_list';
import Logo from '../../assets/logo.png';
import Flag from '../../Flag/index';
import { Swipeable } from 'react-native-gesture-handler';

export default function Pesquisar() {
  const { onOpen, newBook, excluir, handleEdit } = useContext<AuthContextType>(AuthContextList);
  const swipeableRefs = useRef([]);
  const [expandedItems, setExpandedItems] = useState<number[]>([]); // Estado para controlar os itens expandidos

  const formatarData = (data: string) => {
    // Aqui você pode fazer o corte, por exemplo, pegando os 10 primeiros caracteres
    return data.substring(0, 10); // Exemplo: "2025-01-24"
  };

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderRightActions = () => (
    <View style={style.button}>
      <AntDesign name="delete" size={20} color={"#FFF"} />
    </View>
  );

  const renderLeftActions = () => (
    <View style={[style.button, { backgroundColor: '#42C3FF' }]}>
      <AntDesign name="edit" size={20} color={"#FFF"} />
    </View>
  );

  const handleSwipeOpen = (directions, item, index) => {
    if (directions === 'right') {
      excluir(item.id);
    } else if (directions === 'left') {
      handleEdit(item.id);
    }
  };

  const _renderCard = (item, index) => {
    const isExpanded = expandedItems.includes(index); // Verifica se o item está expandido
    const cores =
      item.flag === 'quero ler' ? '#3DBBF6' :
      item.flag === 'lendo' ? '#FFD83A' :
      item.flag === 'lido' ? '#63C263' :
      item.flag === 'esquecido' ? '#000000' : 'blue';

    return (
      <Swipeable
        ref={(ref) => (swipeableRefs.current[index] = ref)}
        key={index}
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
        onSwipeableOpen={(directions) => handleSwipeOpen(directions, item, index)}
      >
        <TouchableOpacity
          style={[style.card, isExpanded ? style.additionalInfo : null]} // Altera o estilo se expandido
          onPress={() => toggleExpand(index)}
        >
          <View style={style.rowCard}>
            <View style={style.rowCardLeft}>
              {/* <Image style={style.capa} source={item.capa} /> */}
              <View>
                <Text style={style.titleCard}>{item.title}</Text>
                <Text style={style.descriptionCard}>{item.genero}</Text>
              </View>
            </View>
            <Flag caption={item.flag} color={cores} />
          </View>

          {/* Exibe as informações adicionais se o cartão estiver expandido */}
          {isExpanded && (
            <View style={style.additionalInfo}>
              <Text style={style.infoText}><Text style={{ fontWeight: 'bold' }}>Autor(a):</Text> {item.autor}</Text>
              <Text style={style.infoText}><Text style={{ fontWeight: 'bold' }}>Data de lançamento:</Text> {formatarData(item.lançamento)}</Text>
              <Text style={style.infoText}><Text style={{ fontWeight: 'bold' }}>Quantidade de páginas:</Text> {item.qtdPaginas}</Text>
            </View>
          )}
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image style={style.mini_logo} source={Logo} />
      </View>
      <View style={style.boxList}>
        <FlatList
          data={newBook} // Exibe os dados
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => _renderCard(item, index)}
        />
      </View>
    </View>
  );
}
