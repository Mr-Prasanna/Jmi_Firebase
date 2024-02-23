import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight, Dimensions, ImageBackground, BackHandler, ScrollView, StyleSheet } from 'react-native';
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
// import { useForm, Controller } from 'react-hook-form';

const { width, height } = Dimensions.get('screen');
function ShowTimesheet() {

    const [empId, setEmpId] = useState('');
    const [empIdError, setEmpIdError] = useState('');
    const [fromDate, setFromDate] = React.useState(undefined);
    const[fromDateError,setFromDateError] =useState('');
    const date1 = moment(fromDate, 'DD-MM-YYYY').format();
    const dateFrom = date1.split('T')[0];
    const [toDate, setToDate] = React.useState(undefined);
    const [toDateError,setToDateError] =useState('');
    const date2 = moment(toDate, 'DD-MM-YYYY').format();
    const dateTo = date2.split('T')[0];

    const tableHead = ["Emp_ID", "Emp_Name", "Designation", "Date", "Status"];
    // const { control } = useForm();
    const dispatch = useDispatch();
    const navigation = useNavigation();


    const [tableData, setTableData] = useState([]);

    const handleTimesheet = () => {
        navigation.navigate('Timesheet');
    }

    const handleValidate = () => {
        if (empId.trim().length > 0) {
            setEmpIdError('')
        } else {
            setEmpIdError('*Employee ID Required')
        }
        if (fromDate !== '') {
            setFromDateError('')
          }
          else {
            setFromDateError('* From Date feild is required !!!');
          }
          if (toDate !== '' ) {
            setToDateError('');
          } else {
            setToDateError('* To Date feild is required !!!')
          }
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
            <View style={styles.container}>
                <ImageBackground
                    source={require('./../../images/registerImg.jpg')}
                    style={styles.imageBackgroundContainer}
                    imageStyle={styles.imageBackground}
                >
                    <View>
                        <Text style={styles.title}>SHOW ATTENDANCE</Text>
                    </View>
                    <Block style={styles.mainCardView}>
                        <View style={styles.blockView}>

                            <TextInput
                                style={styles.textInputs}
                                onChangeText={(value) => setEmpId(value)}
                                value={empId}
                                placeholder="Employee ID"
                                keyboardType = 'numeric'
                                placeholderTextColor='#666569' //
                                onChange={handleValidate}
                            />

                        </View>
                        <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 }}>{empIdError}</Text>
                        <Block width={width * 0.79} style={{ marginBottom: 15, marginTop: 30, alignSelf:'center' }}>
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
                        <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 ,paddingTop:15}}>{fromDateError}</Text>
     
                        <Block width={width * 0.79} style={{ marginBottom: 15, marginTop: 30, alignSelf:'center' }}>
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
                        <Text style={{ color: 'red', marginLeft: 20, paddingLeft: 20 ,paddingTop:15}}>{toDateError}</Text>

                        <View style={styles.submitevent}>
                            <TouchableHighlight onPress={handleSearch}>
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
                    {/* <ScrollView> */}
                    <FlatList
                        data={tableData}
                        // data={[empId=1 , empName="Kumar",designation='developer',status="pending"][empId=2 , empName="Kumar",designation='developer',status="pending"]}
                        renderItem={renderItemUI}
                        keyExtractor={(item) => item.EmpId} 
                        />
                       
                    {/* </ScrollView> */}
                </ImageBackground>
            </View>
    );
}

// const renderItem = () => {
//     // console.log('item++++', item)
//     return (
//         <View style={{ backgroundColor: 'white', padding: 10, borderColor: 'black', borderWidth: 1, margin: 10, marginHorizontal: 15, borderRadius: 10 }}>
//             <View style={{ flexDirection: 'row' }}>
//                 <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name :</Text>
//                 {/* <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 40, paddingLeft: 40 }}>{` ${item.EmpName}`}</Text> */}
//             </View>
//             <View style={{ flexDirection: 'row' }}>
//                 <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Designation :</Text>
//                 {/* <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{`${item.Designation}`}</Text> */}
//             </View>
//             <View style={{ flexDirection: 'row' }}>
//                 <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Date :</Text>
//                 {/* <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 50, paddingLeft: 50 }}>{`${item.Date}`}</Text> */}
//             </View>
//             <View style={{ flexDirection: 'row' }}>
//                 <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Status :</Text>
//                 {/* <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 40, paddingLeft: 45 }}>{`${item.Status}`}</Text> */}
//             </View>
//         </View>
//     )
// }

const renderItemUI = ({ item }) => {
    // console.log('item++++', item)
    return (
        <View style={{ backgroundColor: 'white', padding: 10, borderColor: 'black', borderWidth: 1, margin: 10, marginHorizontal: 15, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name :</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 40, paddingLeft: 40 }}>{` ${item.EmpName}`}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Designation :</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 30 }}>{`${item.Designation}`}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Date :</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 50, paddingLeft: 50 }}>{`${item.Date}`}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Status :</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 40, paddingLeft: 45 }}>{`${item.Status}`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#2411f5',
        // backgroundColor:'#fad587'
        //    backgroundColor: '#61A3BA'
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
        alignSelf:'center',
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
        placeholderTextColor:'black',
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
        paddingVertical: 25,
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
        width: width * 0.5,
        marginTop: 15,
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
        paddingTop: 5,
        fontSize: 30,
        // borderCurve:20

    },
    mainCardView: {
        height: 340,
        paddingBottom: 30,
        marginBottom: 50,
        borderColor: '#f7f5f0',
        borderWidth: 2,
        borderRadius: 11.5,
        marginHorizontal: 15
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
export default ShowTimesheet;