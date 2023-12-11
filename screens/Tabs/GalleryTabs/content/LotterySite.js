import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity,FlatList, ScrollView } from 'react-native';
import {HeaderWithBackButton} from '../../../../components/HeaderBackButton'
import {Toggle} from '../../../../components/ToggleSwitch'
import {Collapse} from '../../../../components/Collapse'
import { Tabs } from '../../../../components/request/tabsLottery';
import { Request_BallsLottery} from '../../../../components/request/requestlotterySite'; // Import the set you need
import * as link from '../../../../constant/ApiConstants'; // Import the set you need
import CustomTabs from '../../../../components/LotteryTabs';

const tabNames = 
[ <Tabs apiUrl={link.DEFUALT_TABS} keyname="0" title='香港六合彩' />,
<Tabs apiUrl={link.DEFUALT_TABS} keyname="1" title='澳门六合彩' />,
<Tabs apiUrl={link.DEFUALT_TABS} keyname="2" title='台湾六合彩' />,
];

const tabContent = [
  <View key={0} >
    <View >
          <Request_BallsLottery apiUrl={link.DEFUALT_HKBALLS} 
          link='https://h5.49217009.com:8443/unite49/h5/lottery/video/list?lotteryType=1&year=2023&pageSize=4&pageNum=1' 
          livelink='https://h5.49217006.com:8443/unite49/h5/index/lastLotteryRecord?lotteryType=1' 
          keyname='k' 
          indexs="5" />
    </View>
  </View>,
  <View key={1} >
    <View >
          <Request_BallsLottery apiUrl={link.DEFUALT_AUBALLS}  link='https://h5.49217009.com:8443/unite49/h5/lottery/video/list?lotteryType=2&year=2023&pageSize=4&pageNum=1' 
          livelink='https://h5.49217006.com:8443/unite49/h5/index/lastLotteryRecord?lotteryType=2' 
          keyname='k' 
           indexs="5" />
    </View>
  </View>,
    <View key={2} >
    <View >
          <Request_BallsLottery apiUrl={link.DEFUALT_TWBALLS} 
          link='https://h5.49217009.com:8443/unite49/h5/lottery/video/list?lotteryType=3&year=2023&pageSize=4&pageNum=1' 
          livelink='https://h5.49217006.com:8443/unite49/h5/index/lastLotteryRecord?lotteryType=3' 
           keyname='k' 
           indexs="5" />
    </View>
  </View>,
    
];

export const ModalLotterySite = ({ closeModal,imageList }) => {
    return (
        <View style={styles.modalContent}>
            <HeaderWithBackButton  title={'开奖现场'} closeModal={closeModal} />
            <CustomTabs tabs={tabNames} imageList={imageList} content={tabContent}/>
        </View>
    );
};


  
const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },container: {
        marginLeft:10,
        marginRight:10,
        flex: 1,
        alignItems: 'center',
      },
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
        button: {
            width: '33%',
            padding: 8,
            borderColor: '#00c160',
            borderWidth: 1,
            alignItems: 'center',
        },
      buttonText: {
        color: '#00c160',
        fontSize: 16,
      },
      activeButton: {
        backgroundColor: '#00c160', 
      },
      activeButtonText:{
        color: 'white',
      },
      buttonLeft:{
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      buttonRight:{
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },
      cardList:{
        marginTop:10,
        padding:20,
        backgroundColor:'white',
        paddingHorizontal: 16,
        paddingTop: 16,
        alignItems: 'center', // Center items horizontally
      }
});

const StyleBall = StyleSheet.create({
  ballGroup: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ballImage: {
    // Adjust the styles for the ball image as needed
  },
  centeredText: {
    position: 'absolute',
    color: 'green', // Adjust the text color as needed
    fontSize: 19, // Adjust the font size as needed
  },
  countdownContainer:{
    marginBottom:15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
  },
  
  cameraContainer:{
    marginTop:15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
  },
  cameraTextRed:{
    fontSize: 14, color: 'red',paddingTop:3,
  },
  ic_camera:{
    width:25,height:25
  },
  ic_full:{
    width:20,height:20
  },
  countdownTextGreen:{
    fontWeight: '500',
    fontSize: 15, color: 'green'
  },
  countdownTextBlack:{
    fontWeight: '500',
    fontSize: 15, color: 'black'
  },
  countdownTextRed:{
    fontWeight: '500',
    fontSize: 15, color: 'red'
  },
  ballContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  tab_ball:{
    height:150,
    backgroundColor:'white',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },
  ball_group: {
    paddingTop:25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});




export default ModalLotterySite;
