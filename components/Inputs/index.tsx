import React, {forwardRef, Fragment, LegacyRef} from 'react';
import {View, Text, TextInput, TextInputProps, TouchableOpacity, StyleProp, TextStyle} from 'react-native';
import {MaterialIcons, FontAwesome6,Octicons} from '@expo/vector-icons';
import {style} from './styles';
//Reutilização de códigos (inputs)

//Se for inserido outro tipo de ícone (grupo do Vector Icons), informar aqui, fica todos salvos aqui
type IconCompoment = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome6>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;
                    

//Define um nome para facilitar a ciração dos inputs
type Props<IconType = any> = TextInputProps & {
  IconLeft?: React.ComponentType<IconCompoment>|any;
  IconRight?: React.ComponentType<IconCompoment>|any;
  iconLeftName?: string,
  iconRightName?: string,
  title?: string,
  onIconLeftPress?: () => void,
  onIconRightPress?: () => void,
  height?:number,
  width?:number,
  labelStyle?:StyleProp<TextStyle>,

}
export const Input = forwardRef((Props:Props,ref: LegacyRef<TextInput> | null)=>{

  const {IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, height, width, labelStyle, ...rest }=Props

  const calculateSizeWidth = () =>{
    if(IconLeft && IconRight){
      return '80%'
    }else if (IconLeft || IconRight){
      return '90%'
    }else{
      return '100%'
    }
  };

  const calculateSizePaddingLeft = () => {
    if (IconLeft && IconRight){
      return 0;
    }else if (IconLeft || IconRight){
      return 10;
    }else{
      return 20;
    }
    
  };
  return (
    <Fragment>
    {title&&<Text style={[style.titleInput, labelStyle]}>{title}</Text>}
    <View style={[style.BoxInput, {paddingLeft:calculateSizePaddingLeft(),height:height||40, width:width||'100%'}]}>
    {IconLeft && iconLeftName &&(
      <TouchableOpacity onPress={onIconLeftPress} style={style.button}>
        {/* esse prop n */}
        <IconLeft name={iconLeftName} size={20} color={'#02C4D2'} style={style.Icon}/>
      </TouchableOpacity>
    )}

    <TextInput 
      style={[
        style.input,{width:calculateSizeWidth(), height:'100%'}
      ]}
      {...rest}
    />
    {IconRight && iconRightName &&(
      <TouchableOpacity onPress={onIconRightPress} style={style.button}>
        <IconRight name={iconRightName} size={20} color={'#02C4D2'} style={style.Icon}/>
      </TouchableOpacity>
    )}
    </View>
    </Fragment>
  )
})