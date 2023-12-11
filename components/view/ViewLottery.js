import React, { useEffect,useState, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import Request_Balls from '../request/reqballs';
import  * as link from '../../constant/ApiConstants';
import ImageSlider from '../ImageSlider';
import SliderBox from '../../components/SliderBox';


export const Container = ({ text, title,requestLink,period,year }) => {
  const imagesRequest = "https://h5.49217003.com:8443/unite49/h5/index/uniteInfo?lotteryType=1";
  const [imageList, setImageList] = useState([]);
  const [imageListName, setImageListName] = useState([]);
  const fetchData = async () => {
    try {
      const imageResponse = await fetch(imagesRequest);
      const resultRes = await imageResponse.json();
      if (resultRes.data.listWheelAdvert.advertList.length > 0) {
        const newImageList = resultRes.data.listWheelAdvert.advertList.map(element => element.imgPath);
        const newImageListName = resultRes.data.listWheelAdvert.advertList.map(element => element.url);
        setImageList(newImageList);
        setImageListName(newImageListName);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();

  const [data, setData] = useState([]);


    // console.log(links.links );
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(requestLink);
          const result = await response.json();

          if (result.data.detailList.length>0){
        
            const val = result.data.detailList[0].value;
             dataArray = result.data.detailList[1].value.split(',');
             dataArray.push("1")
            dataArray.push(val);

            dataArray.unshift("1")
            setData(dataArray); 


          }
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // Make sure to pass an empty dependency array if this effect should only run once




  return (
    <>
      <View style={styles.container}>
     
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.videoContainer}>
        <Text style={styles.videoTitle}>No Video Available</Text>
        {/* <Text style={styles.videoTitle}>{requestLink}</Text> */}
      </View>
      {/* <View key={0} style={StyleBall.tab_ball}> */}
      <Request_Balls apiUrl={data} key={0} keyname='k' period={period} year={year} indexs="6" />
     
      
      <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>买澳门六合彩就上<Text style={styles.yellowText}>1777彩票</Text>特码55.0倍</Text>
            <TouchableOpacity>
              <Text style={styles.buttonText}>点立即投注</Text>
            </TouchableOpacity>
            
      </View>
      <SliderBox images={imageList} imageListName = {imageListName} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 10,
    padding: 10,
  },
  container2: {
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent:'center',
    height:250,
    width:'100%', 
    backgroundColor: 'black',
  },videoTitle: {
    fontSize: 20,
    color : 'white',
  }, footerContainer:{
    backgroundColor : 'red',
    alignItems:'center',
    height:190,
    width:'100%', 
  },
  bannerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    height:70,
    width:'100%', 
    backgroundColor: '#00c160',
  },rrrContainer:{
    height:200,
    width:'100%', 
    backgroundColor: 'pink',
  },bannerText:{
    marginRight:20,
    color: 'white',
    fontWeight: '700',
  },yellowText:{
    color:'yellow'
  },buttonText:{
    color:'#00c160',
    fontWeight:'800',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:15,
    backgroundColor: 'white',
  }
});

const StyleBall = StyleSheet.create({
  ballGroup: {
    backgroundColor : 'red',
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
    
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },
  ball_group: {
    height:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Container;
