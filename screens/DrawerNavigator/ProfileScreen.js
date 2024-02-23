import React, { useState } from "react";
import { View, Text, TouchableHighlight, TouchableOpacity,ScrollView, BackHandler, StyleSheet, Dimensions } from 'react-native';
import { TextInput, Button1, Provider } from 'react-native-paper';
import { DatePickerInput } from "react-native-paper-dates";
import moment from 'moment';
import { Input, Block, theme, Icon } from 'galio-framework';
import { Button , Card } from '../../components';
// import {  Icon } from '../../components';
import { Images, nowTheme } from '../../constants';
import articles from "../../constants/articles";
const { width, height } = Dimensions.get('screen');

function Profiles() {
    const [empId, setEmpId] = useState('');
    const [empIdError, setEmpIdError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [designation, setDesignation] = useState('');
    const [designationError, setDesignationError] = useState('');
    const [experience, setExperience] = useState('');
    const [experienceError, setExperienceError] = useState('');
    const [birthDate, setBirthDate] = React.useState(undefined)///new Date()
    const date1 = moment(birthDate, 'DD-MM-YYYY').format();
    const dob = date1.split('T')[0];
    const [birthDateError, setBirthDateError] = useState('');

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
        <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card
              item={articles[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block>
      </ScrollView>
        // <View style={styles.container}>
        //     <View >
        //         <Text style={styles.title}>PROFILE</Text>
        //     </View>
        //     <View style={styles.body}>
        //         <View >
                   
        //             {/* <Block>
        //                 <Icon name="pin-3" family="Galio" color={theme.COLORS.BLACK} size={20} />
        //                 <Input placeholder="regular"
        //                     style={{ borderColor: theme.COLORS.THEME }} placeholderTextColor={theme.COLORS.THEME}
        //                 //   onChangeText={(value) => setEmpId(value)}
        //                 //   value={empId}
        //                 />
        //             </Block>
        //             <Block width={width * 0.8} style={{ marginBottom: 5 }}>
        //                 <Input
        //                     placeholder="First Name"
        //                     style={styles.inputs}
        //                     iconContent={
        //                         <Icon
        //                             size={16}
        //                             color="#ADB5BD"
        //                             name="profile-circle"
        //                             family="NowExtra"
        //                             style={styles.inputIcons}
        //                         />
        //                     }
        //                 />
        //             </Block> */}
        //             <TextInput
        //                 style={styles.input}
        //                 onChangeText={(value) => setEmpId(value)}
        //                 value={empId}
        //                 placeholder='Employee Id'
        //                 minLength={3}
        //                 maxLength={25}
        //             // onChange={handleValidate}
        //             />
        //         </View>
        //         <Text style={{ color: 'red' }}>{empIdError}</Text>
        //         <View>
        //             <TextInput
        //                 style={styles.input}
        //                 onChangeText={(value) => setFirstName(value)}
        //                 value={firstName}
        //                 placeholder='First Name'
        //                 minLength={3}
        //                 maxLength={25}
        //             // onChange={handleValidate}
        //             />
        //         </View>
        //         <Text style={{ color: 'red' }}>{firstNameError}</Text>
        //         <View>
        //             <TextInput
        //                 style={styles.input}
        //                 onChangeText={(value) => setLastName(value)}
        //                 value={lastName}
        //                 placeholder='Last Name'
        //                 minLength={3}
        //                 maxLength={25}
        //             // onChange={handleValidate}
        //             />
        //         </View>
        //         <Text style={{ color: 'red' }}>{lastNameError}</Text>
        //         <View>
        //             <TextInput
        //                 style={styles.input}
        //                 onChangeText={(value) => setExperience(value)}
        //                 value={experience}
        //                 placeholder='Experience'
        //                 minLength={3}
        //                 maxLength={25}
        //             // onChange={handleValidate}
        //             />
        //         </View>
        //         <Text style={{ color: 'red' }}>{experienceError}</Text>
        //         <View>
        //             <TextInput
        //                 style={styles.input}
        //                 onChangeText={(value) => setDesignation(value)}
        //                 value={designation}
        //                 placeholder='Designation'
        //                 minLength={3}
        //                 maxLength={25}
        //             // onChange={handleValidate}
        //             />
        //         </View>
        //         <Text style={{ color: 'red' }}>{designationError}</Text>

        //     </View>


        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        backgroundColor: '#61A3BA'
        // backgroundColor:'#fad587'
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 25,
        color: "white"
        // color: '#f0b20a'
        // color:'#d41b0b'
    },
    input: {
        height: 40,
        width: 350,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10
        // marginRight: 20
    },
    label: {
        fontSize: 18,
        marginBottom: 20,
    },
    showPickerButton: {
        fontSize: 16,
        color: 'blue',
        marginBottom: 20,
    },
    inputs: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 21.5
    },
    createButton: {
        width: width * 0.5,
        marginTop: 25,
        marginBottom: 40
    },
    articles: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE,
        paddingHorizontal: 2,
        fontFamily: 'montserrat-regular'
    
      }
});
export default Profiles;