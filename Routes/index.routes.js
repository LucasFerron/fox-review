import React from 'react';

import {Text} from  'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import BottomRoutes from './Bottom.routes';
//tava errado a importação.
import login from '../pages/login'

export default function Routes(){
  const Stack = createStackNavigator()
  return(
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:"#FFF"
        }
      }}
    >
      <Stack.Screen
        name="Login"
        component={login}
      />
      <Stack.Screen
        name="BottomRoutes"
        component={BottomRoutes}
      />
    </Stack.Navigator>
  )

}