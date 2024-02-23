import React, { Component } from "react";
// import { View, Text, TouchableHighlight, BackHandler, StyleSheet } from 'react-native';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, View } from 'react-native';
import { Block, Button, Text, theme, Icon } from 'galio-framework';
import { Input ,Card} from '../../components';

import { Images, nowTheme } from '../../constants';
import { HeaderHeight } from '../../constants/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get('screen');

// function Help(props) {
export default class Help extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#9ad2e3'}}>
          <Text>Help Screen</Text>
      </View>

      // <Block flex >
      //   <StatusBar barStyle="light-content" />
      //   <Block flex>
      //     <ImageBackground
      //       source={Images.Onboarding}
      //       style={{ flex: 1, height: height, width, zIndex: 1 }}
      //     >
      //     <Block space="between" style={styles.padded}>
      //       <Block>
      //         {/* <Block middle> */}
      //           {/* <View style={{ flexDirection: 'row' }}> style={{ justifyContent: 'center', textAlign: 'center', marginBottom: 15 }} 
      //               <MaterialCommunityIcons name="alpha-j-box" color={'white'} size={60} style={{ width: 115, height: 124, bottom: 200, position: 'absolute' }} />
      //               <MaterialCommunityIcons name="alpha-m-box" color={'white'} size={60} style={{ width: 115, height: 124, bottom: 200 ,marginLeft:50,paddingLeft:50}}/>
      //               <MaterialCommunityIcons name="alpha-i-box" color={'white'} size={60} style={{ width: 115, height: 124, bottom: 200, marginLeft:40,paddingLeft:40 }}/> 
      //           </View> */}
      //           {/* <Image source={Images.NowLogo} style={{ width: 115, height: 124, bottom: 200, position: 'absolute' }} /> */}
      //         {/* </Block> */}
      //         {/* <Block> */}
      //           <Block middle>
      //             <Text
      //               style={{
      //                 fontFamily: 'montserrat-regular', bottom: 50, position: 'absolute', letterSpacing: 2, paddingHorizontal: 20, textAlign: 'center'
      //               }}
      //               color="white"
      //               size={24}
      //             >
      //               LOGIN
      //             </Text>
      //           </Block>
      //           {/* <Card> */}
      //             <Block width={width * 0.8} style={{ marginBottom: 5 }}>
      //               <Input
      //                 placeholder="Username"
      //                 style={styles.inputs}
      //                 iconContent={
                        
      //                   <MaterialCommunityIcons name="email" color="#ADB5BD" family="NowExtra" size={16} style={styles.inputIcons} />
      //                 }
      //               />

      //             </Block>
      //             <Block width={width * 0.8} style={{ marginBottom: 5 }}>
      //               <Input
      //                 placeholder="Password"
      //                 style={styles.inputs}
      //                 iconContent={
      //                   <MaterialCommunityIcons name="lock" color="#ADB5BD" size={16} family="NowExtra" style={styles.inputIcons} />
      //                 }
      //               />
      //             </Block>
      //             <Block middle>
      //               <Button color="primary" round style={styles.createButton}>
      //                 <Text
      //                   style={{ fontFamily: 'montserrat-bold', color: 'white' }}
      //                   size={14}
      //                 // color={nowTheme.COLORS.WHITE}
      //                 >
      //                   Submit
      //                 </Text>
      //               </Button>
      //             </Block>
      //           {/* </Card> */}
      //         {/* </Block> */}
      //         {/* <Block middle row>
      //           <Text
      //             color="white"
      //             size={16}
      //             style={{ fontFamily: 'montserrat-regular' }}
      //           >
      //             Designed by
      //           </Text>
      //           <Image
      //             source={Images.InvisionLogo}
      //             style={{
      //               height: 28,
      //               width: 91,
      //               marginLeft: theme.SIZES.BASE
      //             }}
      //           />
      //         </Block> */}
      //         {/* <Block middle row style={{ marginTop: 15, marginBottom: 30}}>
      //           <Text
      //             color="white"
      //             size={16}
      //             style={{ fontFamily: 'montserrat-regular' }}
      //           >
      //             Coded by
      //           </Text>
      //           <Image
      //             source={Images.CreativeTimLogo}
      //             style={{
      //               height: 29,
      //               width: 129,
      //               marginLeft: theme.SIZES.BASE
      //             }}
      //           />
      //         </Block> */}

      //         {/* <Block
      //           row
      //           style={{
      //             marginTop: theme.SIZES.BASE * 2.5,
      //             marginBottom: theme.SIZES.BASE * 2
      //           }}
      //         >
      //           <Button
      //             shadowless
      //             style={styles.button}
      //             color={nowTheme.COLORS.PRIMARY}
      //             onPress={() => navigation.navigate('App')}
      //           >
      //             <Text
      //               style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
      //               color={theme.COLORS.WHITE}
      //             >
      //               GET STARTED
      //             </Text>
      //           </Button>
      //         </Block> */}
      //       </Block>
      //     </Block>
      //     </ImageBackground>
      //   </Block>
      // </Block>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },

  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5
  },
  Icon: {
    position: 'absolute',
    right: 90,
    alignSelf: 'center',
    alignItems: 'center',

  },
});
// export default Help;