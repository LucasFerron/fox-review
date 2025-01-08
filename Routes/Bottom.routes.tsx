import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from '../pages/TelaInicial/index';
import Pesquisar from '../pages/pesquisar/index';
import Perfil from '../pages/Perfil/index';
import Menu from '../pages/Menu/index';
import CustomTabBar from '../components/CustomTabBar/index';
import {AuthProviderList} from '../context/authContext_list';

const Tab = createBottomTabNavigator();
//páginas sincronizadas
export default function BottomRoutes(){
  return (
    <AuthProviderList>
      <Tab.Navigator
        screenOptions={{
          headerShown:false
        }}
        tabBar={pros=><CustomTabBar {...pros}/>}
      >
        <Tab.Screen
          name="TelaInicial"
          component={TelaInicial}
        />
        <Tab.Screen
          name="Pesquisar"
          component={Pesquisar}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
        />
      </Tab.Navigator>
      </AuthProviderList>
  );
}