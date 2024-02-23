import React, { Component, useState } from "react";
// import { View, Text, TextInput, Image, TouchableHighlight, BackHandler, StyleSheet, Alert } from 'react-native';
import { View, StyleSheet, TextInput, TouchableHighlight,ImageBackground, Dimensions, StatusBar, TouchableWithoutFeedback, Keyboard, SafeAreaView,ScrollView} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { DatePickerInput, LocaleProvider } from "react-native-paper-dates";
import moment from 'moment';
import { Card } from "react-native-paper";
import { addAttendenceRequest } from "../../actions/attendanceAction";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { useSelector, useDispatch } from 'react-redux';
import { Block, Checkbox, Text, Button as GaButton, theme, Icon } from 'galio-framework';
import { Images, nowTheme } from '../../constants';
// import { Button, Icon, Input } from '../../components';
import { Button, Input } from '../../components';
// import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

export default function TimeSheet() {
  const [empId, setEmpId] = useState('');
  const [empIdError, setEmpIdError] = useState('');
  const [empName, setEmpName] = useState('');
  const [empNameError, setEmpNameError] = useState('');
  const [designation, setDesignation] = useState('')
  const [designationError, setDesignationError] = useState('')
  const [fromDate, setFromDate] = React.useState(undefined)///new Date()
  const date1 = moment(fromDate, 'DD-MM-YYYY').format();
  const dateFrom = date1.split('T')[0];
  const [fromDateError, setFromDateError] = useState('');
  const [toDate, setToDate] = React.useState(undefined)
  const date2 = moment(toDate, 'DD-MM-YYYY').format();
  const dateTo = date2.split('T')[0];
  const [toDateError, setToDateError] = useState('');
  const [task, setTask] = useState('');
  const [taskError, setTaskError] = useState('');
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(null);
  const [valuesError, setValuesError] = useState(null);
  const [openItem, setOpenItem] = useState(false)
  const [items, setItems] = useState([
    { label: 'Work from home', value: '1' },
    { label: 'Work from office', value: '2' },
    { label: 'Casual leave', value: '3' },
  ]);
  const [itemsError, setItemsError] = useState('');
  const [value1, setValue1] = useState(null);
  const [days, setDays] = useState([
    { label: 'One Day', value: 'One Day' },
    { label: 'Two Days', value: 'Two Days' }
  ]);
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const handleValidate = () => {
    if (empId.trim().length > 0) {
      setEmpIdError('')
    } else {
      setEmpIdError('* Employee id required')
    }
    if (empName.trim().length > 0) {
      setEmpNameError('')
    } else {
      setEmpNameError('* Employee name required !!!')
    }
    if (designation.trim().length > 0) {
      setDesignationError('')
    } else {
      setDesignationError('* Designation required !!!')
    }
    if (fromDate !== null) {
      setFromDateError('')
    }
    else {
      setFromDateError('* From Date feild is required !!!');
    }
    if(toDate !== null){
      setToDateError('');
    }else{
      setToDateError('* To Date feild is required !!!')
    }
    if (values !== null) {
      setValuesError('');
    }
    else {
      setValuesError('*Select one item')
    }
    if (task.length > 0) {
      setTaskError('');
    }
    else {
      setTaskError('*Task feild is required !!!');
    }
  }
  const handleShowAttendance = () => {
    navigation.navigate('Show timesheet');
  }

  const handleAddAttendance = () => {

    const getAttendanceData = {
      "empid": empId,
      "empname": empName,
      "designation": designation,
      "dateFrom": dateFrom,
      "dateTo": dateTo,
      "mode": values,

    }
    dispatch(addAttendenceRequest(getAttendanceData, onSuccess, onError))
    //console.log("getData", getAttendanceData);
  };

  function onSuccess(response) {

    if (response.status === "Success") {
      console.log("onSuccessAttendanceResponse", response.message);
      Alert.alert("onSuccess", response.message);
    }
    else {
      console.log("onErrorAddAttendanceResponse", response.message);
      Alert.alert("onError", response.message)
    }
  }

  function onError(error) {
    if (response.status === "Error") {
      console.log("onAttendanceError+", error.message)
      // console.log("onAttendanceError1+", error.message)
      Alert.alert(" Timesheet Error", error.message);
      // Alert.alert("Error", error.message);
    }
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground
        source={require('./../../images/registerImg.jpg')}
        style={styles.imageBackgroundContainer}
        imageStyle={styles.imageBackground}
      >
        <View>
          <Text style={styles.title}>ADD ATTENDANCE</Text>
        </View>
        <Block  style={styles.mainCardView}>
          <View style={styles.blockView}>

            <TextInput
              style={styles.textInputs}
              onChangeText={(value) => setEmpId(value)}
              keyboardType = 'numeric'
              value={empId}
              placeholder="Employee ID"
              placeholderTextColor='#666569'
              onChange={handleValidate}
            />

          </View>
          <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, paddingTop: 5 }}>{empIdError}</Text>
          {/* {empIdError && <Text style={{ color: 'red', marginLeft: 15, paddingLeft: 15 }}>{empIdError}</Text>} */}
          
          <View style={styles.blockView}>

            <TextInput
              style={styles.textInputs}
              onChangeText={(value) => setEmpName(value)}
              value={empName}
              placeholder="Employee Name"
              placeholderTextColor='#666569'
              onChange={handleValidate}
            />

          </View>
          <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, paddingTop: 5 }}>{empNameError}</Text>
          {/* {empNameError && <Text style={{ color: 'red', marginLeft: 15, paddingLeft: 15 }}>{empIdError}</Text>} */}
     
          <View style={styles.blockView}>

            <TextInput
              style={styles.textInputs}
              onChangeText={(value) => setDesignation(value)}
              value={designation}
              placeholder="Designation"
              placeholderTextColor='#666569'
              onChange={handleValidate}
            />

          </View>
          <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, paddingTop: 5 }}>{designationError}</Text>

          {/* {designationError && <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20,paddingTop:5  }}>{designationError}</Text>} */}
          <Block width={width * 0.8} style={{ marginBottom: 5, paddingBottom: 0, marginTop: 0, alignSelf:'center'}}>
            <DropDownPicker
              open={openItem}
              value={values}
              items={items}
              setOpen={setOpenItem}
              setValue={setValues}
              // onChange={handleValidate}
              setItems={setItems}
              placeholder="Select Leave Type"
              placeholderTextColor='#232423'
              //  baseColor='#232423'
              textStyle={{color:'#232423'}}
              style={styles.dropdownInputs}
              dropDownDirection="BOTTOM"
            // dropDownContainerStyle={{ height: 20 }}
            />
          </Block>
          <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, marginTop: 0, fontStyle: 'bold' }}>{valuesError}</Text>

          {/* {valuesError && <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, marginTop: 0, fontStyle: 'bold' }}>{valuesError}</Text>} */}

          <Block width={width * 0.8} style={{ marginBottom: 10, marginTop: 30, alignSelf:'center'}}>
            <DatePickerInput
              style={styles.datepickerInputs}
              locale="en"
              value={fromDate}
              label="From date"
              onChange={(d) => setFromDate(d)}
              inputMode="start"
            />
          </Block>
          <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, marginTop: 20 }}>{fromDateError}</Text>

          <Block width={width * 0.8} style={{ marginBottom: 25, marginTop: 30, alignSelf:'center'}}> 
            <DatePickerInput
              style={styles.datepickerInputs}
              locale="en"
              value={toDate}
              label="To date"
              onChange={(d) => setToDate(d)}
              inputMode="start"

            />
          </Block>
          <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, paddingTop: 5 }}>{toDateError}</Text>

          <View style={styles.blockView}>
            <TextInput
              style={styles.textInputs}
              onChangeText={(value) => setTask(value)}
              value={task}
              placeholder="Task"
              placeholderTextColor='#666569'
              onChange={handleValidate}
            />

          </View>
          <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, paddingTop: 5 }}>{taskError}</Text>
          {/* { taskError &&<Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 ,paddingTop:5}}>{taskError}</Text>} */}
          <View style={styles.submitevent}>
            <TouchableHighlight onPress={handleAddAttendance}>
              <View style={styles.button}>
                <Text style={{ color: 'white', fontWeight: '700' }}>SUBMIT</Text>
              </View>
            </TouchableHighlight>
          </View>
        </Block>
      </ImageBackground>
    </View>
  </ScrollView>

  

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputs: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 21.5,
    color: 'black',
    paddingLeft: 35,
    backgroundColor: 'white',
    // marginHorizontal: 5,
    height: 45
  },
  blockView: {
    // marginLeft: 30,
    width: width * 0.8,
    marginBottom: 0,
    marginTop: 10,
    alignSelf:'center'
    // marginBottom: 10,
    // marginTop: 30

  },
  dropdownInputs: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 21.5,
    fontFamily: 'montserrat-regular',
    textAlign: 'center',
    alignContent: 'center',
    // alignItems: 'center',
    paddingLeft: 35,
    // marginLeft: 35,
    // marginHorizontal: 5,
    // marginBottom: 5,
    marginTop: 5,
    // height: 10
  },
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
    alignSelf:'center',
    //color:'red',

    // marginHorizontal:10
    marginVerticle: 15,
    paddingVertical: 0,
    fontSize: 14,
    paddingTop: 0
    // backgroundColor:'grey'
  },
  body: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    height: 55,
    width: 370,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'white'
    // marginRight: 20
  },
  title: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontSize: 21,
    color: "white",
    textAlign: 'center'
    // color: '#f0b20a'
    // color:'#d41b0b'
  },

  button: {
    // alignItems: "center",
    backgroundColor: '#eb692d',
    // backgroundColor: 'white',
    //color: '#fafaf7',
    //color:'white',
    fontSize: 20,
    //fontWeight: '200',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 21.5,

  },
  searchBtn: {
    width: width * 0.6,
    marginTop: 10,
    marginBottom: 5,
    // marginVertical:5
    paddingverticle: 5,
  },
  submitevent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    alignSelf: 'center',
    marginTop: 5,
    paddingTop: 10,
    fontSize: 30,
    // borderCurve:20

  },
  mainCardView: {
    height: height * 0.9,
    // height:50,
    paddingBottom: 30,
    marginBottom: 50,
    borderColor: '#f7f5f0',
    borderWidth: 2,
    borderRadius: 11.5,
    marginHorizontal: 15,
    paddingTop: 15
    // width: 0,
    // marginHorizontal: 10,
    // backgroundColor: "#776B5D",

    // backgroundColor: '#F9E8D9'
    // backgroundColor: '#E26EE5',
    // marginBottom:200,
    // paddingTop:20,
    // marginHorizontal: 10,

    // elevation: 1,
    // opacity: 0.95,


  },
  text: { margin: 6 },
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  imageBackground: {
    width: width,
    height: height
  },

})
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   imageBackgroundContainer: {
//     width: width,
//     height: height,
//     padding: 0,
//     zIndex: 1
//   },
//   title: {
//     paddingVertical: 25,
//     paddingHorizontal: 30,
//     fontSize: 21,
//     color: "white",
//     textAlign: 'center'
//     // color: '#f0b20a'
//     // color:'#d41b0b'
// },
//   imageBackground: {
//     width: width,
//     height: height
//   },
//   registerContainer: {
//     marginTop: 10,
//     // paddingTop:20,
//    // paddingTop:40,
//     marginBottom: 0,
//     width: width * 0.9,
//     height: height < 710 ? height * 0.8 : height * 0.65,
//     // height:700,
//     // height: height < 812 ? height * 0.8 : height * 0.76,
//     // backgroundColor: nowTheme.COLORS.WHITE,
//     // backgroundColor:"#4eb556",
//     // backgroundColor: '#d98c21',
//     // backgroundColor:'#abdbe3',//'#abdbe3',//
//     // borderRadius: 21.5,
//     borderRadius: 8,
//     // borderCurve: 15,
//     borderWidth: 2,
//     borderColor:'white',
//     // shadowColor: nowTheme.COLORS.BLACK,
//     // shadowColor: nowTheme.COLORS.WHITE,
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 4
//     // },
//     // shadowRadius: 4,
//     // shadowOpacity: 0.1,
//     // elevation: 1,
//     // overflow: 'hidden',
//     // opacity: 0.8
//   },
//   blockView: {
//     width: width * 0.8,
//     marginBottom: 10
//   },
//   textInputs: {
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 21.5,
//     // color: '#080707',
//     color:'black',
//     paddingLeft: 35,
//     backgroundColor: 'white',
//     marginHorizontal: 5,
//     height: 45
//     // paddingVertical:5
//     // marginVertical:10
//   },
//   dropdownInputs: {
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 21.5,
//     fontFamily: 'montserrat-regular',
//     textAlign: 'center',
//     alignContent: 'center',
//     paddingLeft: 35,
//     marginHorizontal: 5,
//     marginBottom:5,
//     height: 25
//   },
//   datepickerInputs: {
//     borderWidth: 1,
//     borderRadius: 21.5,
//     // borderBottomRightRadius:21.5,
//     borderTopRightRadius: 21.5,
//     borderTopLeftRadius: 21.5,
//     // borderBottomStartRadius:17.5,
//     borderColor: 'grey',
//     backgroundColor: 'white',
//     fontFamily: 'montserrat-regular',
//     paddingLeft: 15,
//     height: 45,
//     color:'#909091',
//     marginVerticle: 10,
//     paddingVertical: 0,
//     fontSize: 14,
//     paddingTop: 0,
//     marginHorizontal: 5,
//     // backgroundColor:'grey'
//   },
//   createButton: {
//     width: width * 0.5,
//     height: 40,
//     marginTop: 5,
//     marginBottom: 4,
//     // marginVertical:5
//     paddingverticle: 1,
//     // backgroundColor:'#0be30b' 
//   },
//   showAttndanceBtn: {
//     width: width * 0.5,
//     height: 40,
//     marginBottom: 10,
//     paddingverticle: 1,
//     // backgroundColor:'#ba023c',
//     fontWeight: '600'
//   },

// })
