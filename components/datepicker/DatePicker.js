import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DatePickerInput } from "react-native-paper-dates";

export const DatePicker = (style,locale,label,value,onChange,onChangeText,inputMode) => {
    const {datepickerInputs} =styles;
    return (
        <View>
            <DatePickerInput
                style={datepickerInputs}
                onChange={onChange}
                // onChangeText={onChangeText}
                value={value}
                label={"From date"}
                locale={'en'}
                inputMode={'start'}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    datepickerInputs: {
        borderWidth: 1,
        borderRadius: 21.5,
        borderTopRightRadius: 21.5,
        borderTopLeftRadius: 21.5,
        borderColor: 'grey',
        backgroundColor: 'white',
        fontFamily: 'montserrat-regular',
        paddingLeft: 15,
        height: 47,
        placeholderTextColor: 'black',
        alignSelf: 'center',
        marginVerticle: 15,
        paddingVertical: 0,
        fontSize: 14,
        paddingTop: 0
    },
})