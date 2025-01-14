import React from 'react';
import {View, Text} from 'react-native';
import { style } from './styles'

type Props = {
  caption:string,
  color:string,
  selected?:boolean
}
export default function Flag({...rest}:Props){
  return (
    <View
      style={[
        style.container,
        {backgroundColor:rest?.color},
        rest?.selected && {borderWidth:1}
      ]}

    >
      <Text style={{color:'#FFF'}}>{rest.caption}</Text>
    </View>
  )
}