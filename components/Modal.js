import React, { useState,useEffect } from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { HeaderWithBackButtonRight } from './HeaderBackButton';
import Request_Balls from './request/ballcomponent';
import { HISTORY_LOTTTERY } from '../constant/ApiConstants';
import FlatListWithPullToRefresh from './CompleteInformationFlatlist';

const ItemModal = ({ visible, title, imageUrl, closeModal }) => {
  const requestLottery = "https://h5.49217006.com:8443/unite49/h5/index/lastLotteryRecord?lotteryType=2";

  const [data, setData] = useState([]);
  const [period, setPeriod] = useState([]);
  const [nextPeriod, setnextPeriod] = useState([]);
  const [nextLotteryTime, setnextLotteryTime] = useState([]);
  
    // console.log(links.links );
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(requestLottery);
          const result = await response.json();
          console.log(result)

          if (result.data.numberList.length>0){
            console.log(result.data.numberList)
            const val = result.data.numberList

            dataArray = [];
            // console.log(val[0].number)
            for (let index = 0; index < val.length; index++) {
              dataArray.push(val[index].number)
            }
            setPeriod(result.data.id.toString().slice(0, -1));
            setnextPeriod(result.data.nextId.toString().slice(0, -1));
            setnextLotteryTime(result.data.nextLotteryTime.toString());
            
            dataArray.splice(0, 0, "1");
            dataArray.splice(7, 0, "1");
            console.log(dataArray)

            setData(dataArray); 
            console.log(data)

          }
  
        } catch (error) {
          console.error('Error fetasdching data:', error);
        }
      };
  
      fetchData();
    }, []); // Make sure to pass an empty dependencsy array if this effect should only run once


const ipasamo =  <Request_Balls apiUrl={data} key={0} keyname='k' period={period} nextperiod={"第"+nextPeriod+"期 "+nextLotteryTime+"°星期一 21点30分"} year={"2023"} indexs="6" />
  return (
    <Modal visible={visible} onRequestClose={closeModal}>
      <View style={{ }}>
        <HeaderWithBackButtonRight closeModal={closeModal} title={'澳彩'}/>
       
        <FlatListWithPullToRefresh header={ipasamo}/>
      </View>
    </Modal>
  );
};




export default ItemModal;
