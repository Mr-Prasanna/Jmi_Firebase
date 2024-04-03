import React from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

export const Input =({value,onChange,onChangeText,keyboardType,placeholder,placeholderTextColor,secureTextEntry,style})=>{
const{textInputs}= styles;

return(
    <View>
        <TextInput
        // style={textInputs}
        style={style}
        value={value}
        onChange={onChange}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#666569"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        />
    </View>
)


}

const styles = StyleSheet.create({

    textInputs: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 21.5,
        color: 'black',
        paddingLeft: 35,
        backgroundColor: 'white',
        height: 45
      },
    //   blockView: {
    //     // marginLeft: 30,
    //     width: width * 0.8,
    //     marginBottom: 0,
    //     marginTop: 10,
    //     alignSelf:'center'
    //     // marginBottom: 10,
    //     // marginTop: 30
    
    //   },
})