import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image,ImageBackground } from 'react-native'
import React, { useState,useEffect } from 'react';
import MarqueeText from 'react-native-marquee-ab';
import { MaterialIcons,MaterialCommunityIcons, Ionicons, AntDesign, Entypo,Feather, FontAwesome5 } from '@expo/vector-icons';

import ImageSlider from '../../components/ImageSlider'
import MarqueeView from 'react-native-marquee-view';
import CustomTabs from '../../components/CustomTabs';
import CustomFab from '../../components/CustomFab';
import FloaterBottom from '../../components/FloaterBottom';

// IMAGES
// import { imageArray,textArray } from '../../constant/AppConstants'; // Import the set you need

// TEST API
import { Request_Balls,aaaa } from '../../components/request/test'; // Import the set you need

import { DEFUALT_JSAM } from '../../constant/ApiConstants'; // Import the set you need

const Gallery = () => {

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
  
  const imageArray = [
    'https://tk2.jixingkaisuo.com:4949/m/col/222/ampgt.jpg',
    'https://tk2.jixingkaisuo.com:4949/m/col/222/jx30m.jpg',
    'https://tk2.jixingkaisuo.com:4949/m/col/222/jx30m.jpg',
    'https://tk2.jixingkaisuo.com:4949/m/col/222/jx30m.jpg',
    
    // Add more image URLs here
  ];

  const textArray = [
    'Text for Image 1',
    'Text for Image 2',
    'Text for Image 3', 
    'Text for Image 4',
    // Add more text entries here
  ];


  const tabNames = ['澳彩\n08月09日开奖', 
                    '港彩 \n08月10日开奖', 
                    '台彩\n08月11日开奖',
                     '新彩\n08月10日开奖'
                    ];

// jump here
// ball tab

const BallWithText = ({ text, imageSource,count }) => {
  return (
   

      <View>
      <View style={StyleBall.ballGroup}>
        <Image source={imageSource} style={StyleBall.ballImage} />
        <Text style={StyleBall.centeredText}>{count}</Text>
      </View>
      <Text style={styles.buttonText}>{text}</Text>
      </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_icon: {
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
  },
  buttonText: {
    // Your text styles here
    marginBottom: 50, // Adjust the margin as needed
    textAlign: 'center',

  },
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
  }, ballContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  tab_ball:{
    height:120,
    backgroundColor:'white',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },
  ball_group: {
    marginTop:15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});


const plus = 
    (
      <View>
        <View style={StyleBall.centeredText}>
          <Text style={StyleBall.centeredText}>+</Text>
        </View>
      </View>
    )
;


const testss= <Request_Balls apiUrl={DEFUALT_JSAM} keyname='k'/>

console.log(testss);
  const tabContent = [
                    <View key={0} style={StyleBall.tab_ball}>
                      <View style={StyleBall.ball_group}>
                          <View style={StyleBall.ballContainer}>
                        <View>
                    </View>                 

                    
                    {/* <Request_Balls apiUrl={DEFUALT_JSAM} keyname='k'/> */}

                           {<BallWithText text="火/牛" count="35" imageSource={require('../../assets/icons/ball_red.png')} />}
                           {<BallWithText text="火/牛" count="25" imageSource={require('../../assets/icons/ball_red.png')} />}
                           {<BallWithText text="火/牛" count="6" imageSource={require('../../assets/icons/ball_red.png')} />}
                           {<BallWithText text="火/牛" count="85" imageSource={require('../../assets/icons/ball_red.png')} />}
                           {<BallWithText text="火/牛" count="15" imageSource={require('../../assets/icons/ball_red.png')} />}
                           {plus}
                           {<BallWithText text="火/牛" count="15" imageSource={require('../../assets/icons/ball_red.png')} />}

                       </View>
                      </View>


                  
                        
                        </View>,
                      <View key={1}  style={styles.tab_content}>
                        <Text>Content  for Tab 2</Text>
                      </View>,
                      <View key={2}  style={styles.tab_content}>
                        <Text>Content for Tab 3</Text>
                      </View>,
                      <View key={3}  style={styles.tab_content}>
                        <Text>Content for Tab 4</Text>
                      </View>,
  ];
  
  return (

    <>
       <ScrollView>
    <View style={{top:-30}}>
    <ImageSlider imageUrls={images} paginationBottom={35} />

    <View style={{flexDirection:'row',marginTop:-25 }}>
      <TouchableOpacity style={styles.volume_button}>
      <Feather name="volume-2" size={24} color="red" />
      </TouchableOpacity>

      <MarqueeView
      autoPlay={true}
      playing={true}
        style={{
          backgroundColor: 'white',
          color: 'black',
          width: '100%',
        }}>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{fontSize:16}}>
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

    <View style={styles.container_group_1}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/kaijiangxianchang.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>开奖现场</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/ziliaodaquan.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>资料大全</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/zixuntongji.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>资讯统计</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/chaxunzhushou.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>查询助手</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer2}>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/ymjc.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>幽默猜测</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/liuhetuku.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>六合图库</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/jiaoliudating.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>高手论坛</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/gongjubaoxiang.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>工具宝箱</Text>
        </TouchableOpacity>
      </View>
    </View>    



    </View>

    <View style={styles.container_group_2}>

    <View style={styles.buttonContainer3}>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/ymjc.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>幽默猜测</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/liuhetuku.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>六合图库</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/jiaoliudating.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>高手论坛</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Image source={require('../../assets/icons/gongjubaoxiang.png')} style={styles.image_icon} />
        <Text style={styles.buttonText}>工具宝箱</Text>
        </TouchableOpacity>
      </View>
      
    </View>




    <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent: 'space-between'}}>
    {imageArray.map((image, index) => (
          <View key={index} style={styles.cardContainer}>
            <Image source={{ uri: image }} style={styles.cardBackground}/>
            <Text style={styles.cardText}>{textArray[index] }</Text>
          </View>
         
        ))}
    </View>

   

 

    
   
    </ScrollView>

     <View style={styles.footer}>
        {/* Your footer content goes here */}
        <FloaterBottom /> 
        <CustomFab />
      </View>

  
    </>
 

    
  )
}

// jump here
export default Gallery

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: 'center',
    height:70,
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
    height:45,
    width:45,
  },
  container_group_1: {
    marginTop:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container_group_2:{
    marginTop:5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop:10
  },
  buttonContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop:10,
    height:'100%',
    padding:10,
    
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  volume_button:{
    backgroundColor:'white',
    width:25,
    marginLeft:2,
  },
  tab_content:{
    height:120,
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'#07C160',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },

})