import React, { useContext } from "react";

import {  View,Text } from 'react-native';
import { colors } from "../../config/theme";
import { ThemeContext } from "../../context/ThemeContext";


  function Help( isActive){
    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isActive ? activeColors.primary : activeColors.text }}>
          <Text style={{color: isActive ? activeColors.text : activeColors.primary }}>Help Screen</Text>
      </View>

      
    );

 
}


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: theme.COLORS.BLACK,
//     marginTop: Platform.OS === 'android' ? -HeaderHeight : 0
//   },
//   padded: {
//     paddingHorizontal: theme.SIZES.BASE * 2,
//     zIndex: 3,
//     position: 'absolute',
//     bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3
//   },
//   button: {
//     width: width - theme.SIZES.BASE * 4,
//     height: theme.SIZES.BASE * 3,
//     shadowRadius: 0,
//     shadowOpacity: 0
//   },

//   gradient: {
//     zIndex: 1,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 66
//   },
//   inputs: {
//     borderWidth: 1,
//     borderColor: '#E3E3E3',
//     borderRadius: 21.5
//   },
//   Icon: {
//     position: 'absolute',
//     right: 90,
//     alignSelf: 'center',
//     alignItems: 'center',

//   },
// });
export default Help;