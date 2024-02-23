import React, { useState, useEffect ,useRef,useMemo,useCallback} from "react";
import { View, Text, TextInput,ActivityIndicator, TouchableHighlight, SafeAreaView, Button, Dimensions, ImageBackground, BackHandler, ScrollView, StyleSheet } from 'react-native';
import { DatePickerInput } from "react-native-paper-dates";
import { useSelector, useDispatch } from 'react-redux';
import DropDownPicker from "react-native-dropdown-picker";
import { showAttendanceRequest } from "../../actions/showAttendanceAction";
import moment from 'moment';
import { SHOW_ATTENDANCE_API } from "../../apis/api";
import { useNavigation } from '@react-navigation/native';
import { Table, Row, Rows } from "react-native-table-component";
import axios from 'axios';
import { Card, DataTable } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { Block } from 'galio-framework';
// import BottomSheet ,{BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import { BottomSheet } from 'react-native-btr';
import { ListItem } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { MaterialBottomTabView } from "react-native-paper/lib/typescript/react-navigation";
import Animated, { SlideInDown } from "react-native-reanimated";
// import { useForm, Controller } from 'react-hook-form';


const { width, height } = Dimensions.get('screen');
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);
function Settings() {
  const [empId, setEmpId] = useState('');
  const [empIdError, setEmpIdError] = useState('');
  const [fromDate, setFromDate] = React.useState(undefined);
  const [fromDateError, setFromDateError] = useState('');
  const date1 = moment(fromDate, 'DD-MM-YYYY').format();
  const dateFrom = date1.split('T')[0];
  const [toDate, setToDate] = React.useState(undefined);
  const [toDateError, setToDateError] = useState('');
  const date2 = moment(toDate, 'DD-MM-YYYY').format();
  const dateTo = date2.split('T')[0];
  const tableHead = ["Emp_ID", "Emp_Name", "Designation", "Date", "Status"];
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [tableData, setTableData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(true);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  const snapPoints = useMemo(() => ['25%', '50%', '70%', '90'], []);
  const closeActivityIndicator = () => {
    setTimeout(() => {
        setAnimating(false)
    }, 10000)
}
  const toggleBottomNavigationView = () => {
    closeActivityIndicator();
    setVisible(!visible);
  };
  // const bottomSheetRef = useRef<BottomSheet>(null);
  // const handleClosePress = () => bottomSheetRef.current?.close();
	// const handleOpenPress = () => bottomSheetRef.current?.expand();
  // const renderBackdrop = useCallback(
	// 	(props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
	// 	[]
	// );

  const handleTimesheet = () => {
    navigation.navigate('Timesheet');
  }

  const handleValidate = () => {
    if (empId.trim().length > 0 || empId !== '') {
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
    if (fromDate !== '') {
      setFromDateError('')
    }
    else {
      setFromDateError('* From Date feild is required !!!');
    }
    if (toDate !== '') {
      setToDateError('');
    } else {
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

  const handleAttendance =() =>{
    navigation.navigate('About');
  }
  const handleSearch = () => {
    const getData = {
      "empid": empId,
      "dateFrom": dateFrom,
      "dateTo": dateTo,
    }
    dispatch(showAttendanceRequest(getData, onSuccess, onError));
  }

  function onSuccess(response) {
    setTableData(response.attendanceDetails);
    console.log("tableResponse++", response.attendanceDetails);
    console.log("onSuccessResponse", response)
  }
  console.log("setTableData", tableData)
  function onError(error) {
    console.log("onErrorResponse", error)

  }

  return (

    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#03bafc'}}>
    //     <Text>Settings Screen</Text>
    // </View>
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <ImageBackground
                source={require('./../../images/registerImg.jpg')}
                style={styles.imageBackgroundContainer}
                imageStyle={styles.imageBackground}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            marginTop:15,
            textAlign: 'center',
            color:'white'
          }}>
          SHOW ATTENDANCE DETAILS
        </Text>

          <View style={styles.submitevent}>
                    <TouchableHighlight onPress={toggleBottomNavigationView}>{/**  handleOpenPress*/}
                      <View style={styles.button}>
                        <Text style={{ color: 'white', fontWeight: '700' }}>FILTER</Text>
                      </View>
                    </TouchableHighlight>
                  
                  </View>
                  <View>
                 {toggleBottomNavigationView &&<ActivityIndicator
                    animating={animating}
                    color="#bc2b78"
                    size="large"
                    style={styles.activityIndicator}
                />}
                  </View>
        {/* <Animated.View entering={SlideInDown}>         */}
        {!animating&&<BottomSheet
          // ref={bottomSheetRef}
          // index={2}
          // snapPoints={snapPoints}
          // enablePanDownToClose={true}
          // handleIndicatorStyle={{ backgroundColor: '#fff' }}
          // backgroundStyle={{ backgroundColor: 'white' }}
          // backdropComponent={renderBackdrop}
         modalProps={{}}
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
       
        // index={2} snapPoints={snapPoints}
        >
        
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginHorizontal:5,
                borderRadius:10
             
              }}>
              <ImageBackground
                source={require('./../../images/registerImg.jpg')}
                style={styles.imageBackgroundContainer}
                imageStyle={styles.imageBackground}>
                <View>
                  <Text style={styles.title}>SHOW ATTENDANCE</Text>
                </View>
                <Block style={styles.mainCardView}>
                  <View style={styles.blockView}>
                  <BottomSheetTextInput 
                  style={styles.textInputs}
                  onChangeText={(value) => setEmpId(value)}
                  value={empId}
                  placeholder="Employee ID"
                  keyboardType='numeric'
                  placeholderTextColor='#666569' //
                  onChange={handleValidate}
                  />
                    {/* <TextInput
                      style={styles.textInputs}
                      onChangeText={(value) => setEmpId(value)}
                      value={empId}
                      placeholder="Employee ID"
                      keyboardType='numeric'
                      placeholderTextColor='#666569' //
                      onChange={handleValidate}
                    /> */}

                  </View>
                  <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 }}>{empIdError}</Text>
                  <Block width={width * 0.79} style={{ marginBottom: 15, marginTop: 30, alignSelf: 'center' }}>
                    <DatePickerInput
                      style={styles.datepickerInputs}
                      locale="en"
                      value={fromDate}
                      label="From date"
                      labelColor='#232423'

                      onChange={(d) => setFromDate(d)}
                      inputMode="start"

                    />
                  </Block>
                  <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, paddingTop: 15 }}>{fromDateError}</Text>

                  <Block width={width * 0.79} style={{ marginBottom: 15, marginTop: 30, alignSelf: 'center' }}>
                    <DatePickerInput
                      style={styles.datepickerInputs}
                      locale="en"
                      value={toDate}
                      label="To date"
                      labelColor='#232423'
                      onChange={(d) => setToDate(d)}
                      inputMode="start"

                    />
                  </Block>
                  <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20, paddingTop: 15 }}>{toDateError}</Text>

                  <View style={styles.submitevent}>
                    <TouchableHighlight onPress={handleAttendance}>{/*handleSearch */}
                      <View style={styles.button}>
                        <Text style={{ color: 'white', fontWeight: '700' }}>SEARCH</Text>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View>
                    <TouchableHighlight onPress={handleTimesheet}>
                      <View style={{ marginTop: 40, marginRight: 15 }}>
                        <Text style={{ color: 'red', textAlign: 'right', fontSize: 20 }}>BACK</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </Block>
              </ImageBackground>
              
            </View>
          </View>
        </BottomSheet>}
        {/* </Animated.View>   */}
        </ImageBackground>
      </View>
    </SafeAreaView>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   textInputs: {
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 21.5,
//     color: 'black',
//     paddingLeft: 35,
//     backgroundColor: 'white',
//     // marginHorizontal: 5,
//     height: 45
//   },
//   blockView: {
//     // marginLeft: 30,
//     width: width * 0.8,
//     marginBottom: 0,
//     marginTop: 10,
//     alignSelf:'center'
//     // marginBottom: 10,
//     // marginTop: 30

//   },
//   dropdownInputs: {
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 21.5,
//     fontFamily: 'montserrat-regular',
//     textAlign: 'center',
//     alignContent: 'center',
//     // alignItems: 'center',
//     paddingLeft: 35,
//     // marginLeft: 35,
//     // marginHorizontal: 5,
//     // marginBottom: 5,
//     marginTop: 5,
//     // height: 10
//   },
//   datepickerInputs: {
//     borderWidth: 1,
//     borderRadius: 21.5,
//     borderTopRightRadius: 21.5,
//     borderTopLeftRadius: 21.5,
//     borderColor: 'grey',
//     backgroundColor: 'white',
//     fontFamily: 'montserrat-regular',
//     paddingLeft: 15,
//     height: 47,
//     placeholderTextColor: 'black',
//     alignSelf:'center',
//     //color:'red',

//     // marginHorizontal:10
//     marginVerticle: 15,
//     paddingVertical: 0,
//     fontSize: 14,
//     paddingTop: 0
//     // backgroundColor:'grey'
//   },
//   body: {
//     justifyContent: "center",
//     alignItems: 'center',
//     marginTop: 10
//   },
//   input: {
//     height: 55,
//     width: 370,
//     margin: 10,
//     borderWidth: 1,
//     padding: 10,
//     marginHorizontal: 10,
//     backgroundColor: 'white'
//     // marginRight: 20
//   },
//   title: {
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     fontSize: 21,
//     color: "white",
//     textAlign: 'center'
//     // color: '#f0b20a'
//     // color:'#d41b0b'
//   },

//   button: {
//     // alignItems: "center",
//     backgroundColor: '#eb692d',
//     // backgroundColor: 'white',
//     //color: '#fafaf7',
//     //color:'white',
//     fontSize: 20,
//     //fontWeight: '200',
//     paddingHorizontal: 50,
//     paddingVertical: 10,
//     borderRadius: 21.5,

//   },
//   searchBtn: {
//     width: width * 0.6,
//     marginTop: 10,
//     marginBottom: 5,
//     // marginVertical:5
//     paddingverticle: 5,
//   },
//   submitevent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignContent: 'space-around',
//     alignSelf: 'center',
//     marginTop: 5,
//     paddingTop: 10,
//     fontSize: 30,
//     // borderCurve:20

//   },
//   mainCardView: {
//     height: height * 0.9,
//     // height:50,
//     paddingBottom: 30,
//     marginBottom: 50,
//     borderColor: '#f7f5f0',
//     borderWidth: 2,
//     borderRadius: 11.5,
//     marginHorizontal: 15,
//     paddingTop: 15
//     // width: 0,
//     // marginHorizontal: 10,
//     // backgroundColor: "#776B5D",

//     // backgroundColor: '#F9E8D9'
//     // backgroundColor: '#E26EE5',
//     // marginBottom:200,
//     // paddingTop:20,
//     // marginHorizontal: 10,

//     // elevation: 1,
//     // opacity: 0.95,


//   },
//   text: { margin: 6 },
//   imageBackgroundContainer: {
//     width: width,
//     height: height,
//     padding: 0,
//     zIndex: 1
//   },
//   imageBackground: {
//     width: width,
//     height: height
//   },

// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  bottomNavigationView: {
    backgroundColor:'#1c90ad',
    // backgroundColor: '#fff',
    borderRadius: 10,
    width: '94%',
    height: 500,
    margin: 10,
    marginRight: 30,
    // paddingHorizontal:20,
    marginLeft: 10,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingVertical: 35,
    paddingHorizontal: 30,
    fontSize: 21,
    color: "white",
    textAlign: 'center'
    // color: '#f0b20a'
    // color:'#d41b0b'
  },
  mainCardView: {
    height: 340,
    paddingBottom: 30,
    marginBottom: 50,
    // borderColor: '#f7f5f0',
    // borderWidth: 2,
    borderRadius: 11.5,
    marginHorizontal: 15
  
  },
  textInputs: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 21.5,
    color: '#1109ed',
    paddingLeft: 35,
    backgroundColor: 'white',
    marginHorizontal: 5,
    height: 45
  },
  blockView: {
    // marginLeft: 30,
    alignSelf: 'center',
    width: width * 0.8,
    marginBottom: 10,
    marginTop: 30
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
    height: 45,
    placeholderTextColor: 'black',
    //color:'red',

    // marginHorizontal:10
    marginVerticle: 15,
    paddingVertical: 0,
    fontSize: 14,
    paddingTop: 0
    // backgroundColor:'grey'
  },
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
  submitevent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    alignSelf: 'center',
    marginTop: 5,
    paddingTop: 5,
    fontSize: 30,
    // borderCurve:20

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
});

export default Settings;

