import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image,ImageBackground,Button } from 'react-native'
import React, { useState,useEffect } from 'react';
import MarqueeText from 'react-native-marquee-ab';
import { MaterialIcons,MaterialCommunityIcons, Ionicons, AntDesign, Entypo,Feather, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import ImageSlider from '../../components/ImageSlider'
import MarqueeView from 'react-native-marquee-view';
import CustomTabs from '../../components/CustomTabs';
import CustomFab from '../../components/CustomFab';
import { createStackNavigator } from '@react-navigation/stack';

import FloaterBottom from '../../components/FloaterBottom';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();

// tanggalin nalang pag kaya na idebug
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
// TEST APIs
import { Request_Balls} from '../../components/request/balls'; // Import the set you need

import * as link from '../../constant/ApiConstants'; // Import the set you need
import { Tabs } from '../../components/request/tabs';
import { LinkRequest } from '../../components/request/getlinks';
import { HomeImages } from '../../components/request/homeimages';
import { OpenLink } from '../../components/Linking';
import GalleryComponent from './GalleryTabs/openlink';
import SliderBox from '../../components/SliderBox';





export const Gallery = () => {
const imagesRequest = "https://h5.49217003.com:8443/unite49/h5/index/uniteInfo?lotteryType=1";
const [imageList, setImageList] = useState([]);
const [imageListName, setImageListName] = useState([]);

useEffect(() => {
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
}, []);





  const images = [
    'https://jmz.qingxinmingxiang.com:4949/unite49files/amyd/2023/11/01/20231101114438--1759808080.jpg',
    'https://jmz.qingxinmingxiang.com:4949/unite49files/amyd/2023/10/31/20231031152915--1759808080.jpg',
    'https://jmz.qingxinmingxiang.com:4949/unite49files/amyd/2023/10/30/20231030123923--1759808080.jpg',
    'https://jmz.qingxinmingxiang.com:4949/unite49files/amyd/2023/08/17/20230817201136--1759808080.jpg',
    'https://jmz.qingxinmingxiang.com:4949/unite49files/amyd/2023/10/04/20231004142200--643932.png',
    'https://jmz.qingxinmingxiang.com:4949/unite49files/amyd/2023/04/26/20230426021210--961550216.jpg',
    'https://jmz.qingxinmingxiang.com:4949/unite49files/amyd/2023/04/26/20230426021222--189301608.jpg'
    // Add more image URLs here
  ];
  

  const tabNames = 
  [ <Tabs apiUrl={link.DEFUALT_TABS} keyname="0" />,
  <Tabs apiUrl={link.DEFUALT_TABS} keyname="1" />,
  <Tabs apiUrl={link.DEFUALT_TABS} keyname="2" />,
  <Tabs apiUrl={link.DEFUALT_TABS} keyname="3" />
  ];


  const tabContent = [
    <View key={0} style={StyleBall.tab_ball}>
      <View style={StyleBall.ball_group}>
            <Request_Balls apiUrl={link.DEFUALT_AUBALLS} key={232} keyname='k' indexs="5" />
      </View>
    </View>,
    <View key={1} style={StyleBall.tab_ball}>
      <View style={StyleBall.ball_group}>
            <Request_Balls apiUrl={link.DEFUALT_HKBALLS} key={21} keyname='k' indexs="5" />
      </View>
    </View>,
      <View key={2} style={StyleBall.tab_ball}>
      <View style={StyleBall.ball_group}>
            <Request_Balls apiUrl={link.DEFUALT_TWBALLS} key={23} keyname='k' indexs="5" />
      </View>
    </View>,
      <View key={3} style={StyleBall.tab_ball}>
      <View style={StyleBall.ball_group}>
            <Request_Balls apiUrl={link.DEFUALT_NCBALLS} key={1131} keyname='k' indexs="5" />
      </View>
    </View>,
  ];
   
  return (
    <>
       <ScrollView style={{ flex: 1 }}>
    <View style={{top:-35}}>
      <SliderBox images={imageList} imageListName = {imageListName} />
    {/* <ImageSlider imageUrls={imageList} paginationBottom={35} /> */}

      <View style={{flexDirection:'row',marginTop:-25 }}>
        <TouchableOpacity style={styles.volume_button} >
        <Image style={{width:20,height:15}} source={require('../../assets/icons/ic_red_horn.png')}  />
        </TouchableOpacity>

        <MarqueeView
        autoPlay={true}
        playing={true}
          style={{
            padding:5,
            backgroundColor: 'white',
            color: 'black',
            width: '100%',
          }}>
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{fontSize:12,color:'gray'}}>
          新增书籍图纸如下 新公开一肖  澳门特码一书 澳门彩霸王 澳门特码一肖 澳门特平宝典 澳门波叔报特 普京赌侠报特 澳门综合资料 澳门精品书刊 澳门玄机来料 澳门白小姐透特 澳门五行白姐 澳门五行玄机 澳门彩王玄机 澳门六合透特 澳门预测玄机 澳门包金来料 澳门绝杀来料 澳门直通车 澳门金牌半波 澳门金刚金 澳门穿云箭 澳门玄机一特 澳门猴王猴 澳门十拿九稳 澳门最新白姐特 澳门白姐暴肖 澳门十二少 澳门六合暴特 澳门凤凰阁 澳门宝典特码 澳门金宝宝 澳门金元宝 澳门内部透密 澳门一波一肖 澳门六合冠军 澳门喜气洋洋 澳门包中六码 澳门平特王中正 澳门平天下 澳门金宝典 澳门传密心水 澳门银宝典 澳门铜宝典 澳门八仙宝典   澳门全集六合 澳门宝典三中三   澳门全集心水     澳门六合皇心水    澳门六合皇宝典 澳门天王宝典    澳门梅花一肖 澳门铁观音 澳门黄金一码 澳门传密一码 澳门特码帝 澳门主攻五码 澳门万花筒 澳门大老板 澳门玲珑一肖 澳门一肖六码 澳门望子成龙 澳门精选葡京 澳门葡京三码 澳门特码旺 澳门预测生肖 澳门主平特肖 澳门发财波 澳门九龙宝典 澳门九龙心水 澳门特典六肖 澳门济公十八码 澳门传真玄机 澳门宝典平特 澳门春秋宝典 澳门战斗机 澳门金钱豹 澳门狗头铡 澳门无字天书 澳门锦囊宝典 澳门白姐锦囊 澳门赌王天书白姐直通车 澳门期期送金 澳门九龙天书 澳门东北虎 澳门一霸 澳门心水赌侠 澳门一肖黄金 澳门黄金金龙 澳门单吊一肖 澳门钻石十五码 澳门风水平特 澳门六合风水 澳门一点通 澳门定乾坤 澳门飞龙宝典 澳门金手指 澳门乾坤宝典
  请广大彩民收藏，49图库有您更精彩。
          </Text>
        </View>
        </MarqueeView>

      </View>
    </View>
    
<View>
</View>


    <View style={{marginTop:-35,padding:10,backgroundColor:'white'}}>
    
      <CustomTabs tabs={tabNames} content={tabContent}/>

    <View style={linkbutton.linkMainContainer}>
    <LinkRequest apiUrl={link.LINK_AU} keyname='k'/>
   </View>
   </View>




    <View style={styles.container_group_1}>
      <View style={styles.buttonContainer}>
        <GalleryComponent imagesource={require('../../assets/icons/kaijiangxianchang.png')} imagetext={'开奖现场'} imageList={imageList} keyname={'gallerytab1'} />
        <GalleryComponent imagesource={require('../../assets/icons/ziliaodaquan.png')} imagetext={'资料大全'} keyname={'gallerytab2'} />
        <GalleryComponent imagesource={require('../../assets/icons/zixuntongji.png')} imagetext={'资讯统计'} keyname={'gallerytab3'} />
        <GalleryComponent imagesource={require('../../assets/icons/chaxunzhushou.png')} imagetext={'查询助手'} keyname={'gallerytab4'} />
      </View>

      <View style={styles.buttonContainer3}>
        <GalleryComponent imagesource={require('../../assets/icons/ymjc.png')} imagetext={'幽默猜测'} keyname={'gallerytab5'} />
        <GalleryComponent imagesource={require('../../assets/icons/liuhetuku.png')} imagetext={'六合图库'} keyname={'gallerytab6'} />
        <GalleryComponent imagesource={require('../../assets/icons/jiaoliudating.png')} imagetext={'高手论坛'} keyname={'gallerytab7'} />
        <GalleryComponent imagesource={require('../../assets/icons/gongjubaoxiang.png')} imagetext={'工具宝箱'} keyname={'gallerytab8'} />
      </View>
    </View>    


    <View style={styles.stickycontainer} >
    <View style={styles.buttonContainer2}>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/ic_green_img.png')} style={styles.image_icon} />
        <Text style={styles.buttonText2}>2023年彩色</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/ic_gray_img.png')} style={styles.image_icon} />
        <Text style={styles.buttonText2}>2023年彩色</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/ic_green_img.png')} style={styles.image_icon} />
        <Text style={styles.buttonText2}>2023年彩色</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/ic_gray_img.png')} style={styles.image_icon} />
        <Text style={styles.buttonText2}>2023年彩色</Text>
        </TouchableOpacity>
      </View>

   {/* Horizontal ScrollView */}
   <View style={[horizontal.buttonContainer2,{marginTop:10,paddingLeft:10}]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
            {/* Content inside nested ScrollView */}
            <View style={{ width: '100%',height:40, paddingLeft:10 }}>
                <View style={horizontal.buttonContainer2}>
                <TouchableOpacity style={horizontal.button}>
                  <Text style={horizontal.buttonText}>幽默猜测</Text>
                </TouchableOpacity>
                <TouchableOpacity style={horizontal.button}>
                  <Text style={horizontal.buttonText}>六合图库</Text>
                </TouchableOpacity>
                <TouchableOpacity style={horizontal.button}>
                  <Text style={horizontal.buttonText}>高手论坛</Text>
                </TouchableOpacity>
                <TouchableOpacity style={horizontal.button}>
                  <Text style={horizontal.buttonText}>工具宝箱</Text>
                </TouchableOpacity>
                <TouchableOpacity style={horizontal.button}>
                <Text style={horizontal.buttonText}>幽默猜测</Text>
                </TouchableOpacity>
                <TouchableOpacity style={horizontal.button}>
                  <Text style={horizontal.buttonText}>六合图库</Text>
                </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={horizontal.button2}>
              <Text style={horizontal.button2Text}>更多</Text>
          </TouchableOpacity>
        </View>

       
    </View>   

        <View style={[styles.responsiveHeight,{ backgroundColor: 'white' }]}>
        <ScrollView  nestedScrollEnabled={true}> 
           <HomeImages apiUrl={link.HOME_REQUEST_AU} />

          </ScrollView>
        </View>

    </ScrollView>


     <View style={styles.footer}>
        {/* Your footer contesnt goes here */}
        <FloaterBottom /> 
        <CustomFab />
      </View>
    </>
 
    
  )
}

// jump here

const linkbutton = StyleSheet.create({
  linkMainContainer:{
    marginTop:15,
  },
  linkContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  linkContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height:'100%',
    padding:5,
  },
});

const horizontal = StyleSheet.create({
  button: {
    marginRight:10,
    backgroundColor: '#07C160',
    borderRadius:5,
    alignItems: 'center',
  },
  button2: {
    height:35,
    backgroundColor: '#f2f2f2',
    borderRadius:5,
    alignItems: 'center',
  },
  button2Text: {
    paddingTop:5,
    color: '#07C160',
    paddingLeft:15,
    paddingRight:15,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  buttonText: {
    color: 'white',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:5,
    paddingBottom:7,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  buttonContainer2: {
    flexDirection: 'row',
    width: '100%',
  },
});

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: 'center',
    height:57,
  },
  cardContainer: {
    padding:5,
    width: '49%', // 2 columns with a bit of space in between
    height:300,
    marginVertical: 3,
    paddingVertical:10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white', // Optional background color for each card
    borderRadius:10
  },
  cardBackground: {
    resizeMode:'cover',
    width: '100%',
    height: '95%', // Set the desired height of each card
  },cardText: {
    fontSize: 16,
    textAlign:'center'
  },

  image_icon:{
    height:55,
    width:55,
  },
  ic_horn:{
    width:22,
  },
  container_group_1: {
    paddingTop:10,
    paddingBottom:10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container_group_2:{
    marginTop:8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  stickycontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop:10,
    paddingTop:25
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  buttonContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop:20,
    marginBottom: 10,

  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',

  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 7,
    fontSize: 14,
    textAlign: 'center',
  },
  buttonText2: {
    marginTop: 7,
    fontSize: 14,
    textAlign: 'center',
  },
  volume_button:{
    backgroundColor:'white',
    marginLeft:2,
    width:40,
    alignItems:'center',
    padding:5
  },
  tab_content:{
    height:120,
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'#07C160',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },
  mr20:{
  marginRight:25,
  },
  mr40:{
    marginRight:14,
    },
    responsiveHeight: {
      width: '100%',
      aspectRatio: 16 / 20, // Set your desired aspect ratio
      backgroundColor: 'white',
    },
  

  })

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

export default Gallery

