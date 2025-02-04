import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get('window');
export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E9FEFF',
  },
  header: {
    width: '100%',
    height: Dimensions.get('window').height / 8,
    backgroundColor: '#02C4D2',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  mini_logo: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: '25%',
  },
  boxList: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    marginTop: 6,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden', // Garante que nada "vaze" do card
  },
  cardContent: {
    flexDirection: 'column',
  },
  rowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCardLeft: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'flex-start',
    height: 60,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionCard: {
    color: 'gray',
  },
  button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginVertical: 10,
    borderRadius: 10,
  },
  additionalInfo: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
  },
  image: {
    width: width, // Ocupa toda a largura da tela
    height: width * 0.5, // Mantém uma proporção adequada
    resizeMode: "contain", 
    borderRadius: 80, 
  }
});