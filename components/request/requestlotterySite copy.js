// Import the necessary modules
import React, { useState, useEffect,useRef  } from 'react';
import { View, Text, ScrollView,Dimensions  } from 'react-native';
import { StyleSheet,Image,TouchableOpacity ,FlatList} from 'react-native'
import ballRed from '../../assets/icons/ball_red.png';
import ballBlue from '../../assets/icons/ball_blue.png';
import ballGreen from '../../assets/icons/ball_green.png';
import { ballConverter } from '../../constant/AppConstants'; 
import {Collapse} from '../../components/Collapse'
import expand from '../../assets/icons/ic_expand.png';
import hide from '../../assets/icons/ic_hide.png';
import LotteryCard from '../../components/LotteryCard'
import {FoundIt} from '../../screens/Tabs/FoundIt'


var LiveImage = [];


const LiveLinks = (links) => {
  console.log(links.links );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(links.links);
        const result = await response.json();

        if(result.data.recordList.length >0){

          LiveImage=[];
          const recordList = result.data.recordList
          recordList.forEach((record,index) => {

            LiveImage.push({
              image: result.data.recordList[index].pictureUrl,
              description: result.data.recordList[index].videoTitle,
              avatar: result.data.recordList[index].videoUrl,
            });

               
            });

        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array if this effect should only run once
  };








export const Request_BallsLottery = ({ apiUrl, keyname, key ,link }) => {
  // console.log(link)
  const [data, setData] = useState([]);
  const requestBallsRef = useRef('request'); // Create a ref for the Request_BallsLottery component
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        // console.log(result);
        //   console.log(key )
        if (keyname in result) {
          const dataArray = result[keyname].split(',');
          setData(dataArray); 

        } else {
          console.error(`Key '${keyname}' not found in API response.`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, keyname]);

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };


  const FooterComponent = () => {
  return(
         
      
<View>
  
<View style={styles.card}>
            <Text style={[styles.cardText,styles.bgCard]} >2023<Text style={styles.greenText}>第338期</Text>推荐</Text>
            <Text style={styles.cardText}>九肖:马鸡虎蛇羊牛狗鼠兔</Text>
            <Text style={styles.cardText}>六肖:马鸡虎蛇羊牛</Text>
            <Text style={styles.cardText}>四肖:马鸡虎蛇</Text>
            <Text style={styles.cardText}>一肖: 马</Text>
            <Text style={[styles.cardText,styles.greenText]}>+:34 46 31 26 11 45 39 42 16 01</Text>
          </View>

          {/* <View style={styles.card}>
            <Text style={[styles.cardText,styles.bgCard]} >2023<Text style={styles.greenText}>第338期</Text>推荐</Text>
            <Text style={styles.cardText}>九肖:马鸡虎蛇羊牛狗鼠兔</Text>
            <Text style={styles.cardText}>六肖:马鸡虎蛇羊牛</Text>
            <Text style={styles.cardText}>四肖:马鸡虎蛇</Text>
            <Text style={styles.cardText}>一肖: 马</Text>
            <Text style={[styles.cardText,styles.greenText]}>+:34 46 31 26 11 45 39 42 16 01</Text>
          </View>

          <View style={styles.card}>
            <Text style={[styles.cardText,styles.bgCard]} >2023<Text style={styles.greenText}>第338期</Text>推荐</Text>
            <Text style={styles.cardText}>九肖:马鸡虎蛇羊牛狗鼠兔</Text>
            <Text style={styles.cardText}>六肖:马鸡虎蛇羊牛</Text>
            <Text style={styles.cardText}>四肖:马鸡虎蛇</Text>
            <Text style={styles.cardText}>一肖: 马</Text>
            <Text style={[styles.cardText,styles.greenText]}>+:34 46 31 26 11 45 39 42 16 01</Text>
          </View>

          <View style={styles.card}>
            <Text style={[styles.cardText,styles.bgCard]} >2023<Text style={styles.greenText}>第338期</Text>推荐</Text>
            <Text style={styles.cardText}>九肖:马鸡虎蛇羊牛狗鼠兔</Text>
            <Text style={styles.cardText}>六肖:马鸡虎蛇羊牛</Text>
            <Text style={styles.cardText}>四肖:马鸡虎蛇</Text>
            <Text style={styles.cardText}>一肖: 马</Text>
            <Text style={[styles.cardText,styles.greenText]}>+:34 46 31 26 11 45 39 42 16 01</Text>
          </View> */}
          
</View>

  )
}

const HeaderComponent = () =>{
    return (
      <View style={header.container}>
      <Text style={header.textStart}>开奖回放</Text>
      <Text style={header.textEnd}>更多开奖回放</Text>
    </View>
  )
}


  return (
    <>
<LiveLinks links = {link}/>

<View style={{backgroundColor:'blue'}}>
{!collapsed && (
        <View >
          <Text>Collapsible content goespsible content goes hereapsible content goes herea herea..</Text>
        </View>
      )}
</View>   
<View style={{ flex: 1,
    alignItems: 'center',margin:10}}>
<TouchableOpacity  onPress={toggleCollapse}  >
  <Image style={{width:130,height:25}}  source={collapsed ? hide : expand}  />
</TouchableOpacity> 
</View>


    <View ref={requestBallsRef} style={{marginTop:10}}>

      <View style={StyleBall.countdownContainer}>
        <Text style={StyleBall.countdownTextBlack}> 第<Text style={StyleBall.countdownTextGreen}>{data[0]}</Text> 期</Text>
        <Text style={[StyleBall.countdownTextRed]}></Text>
        <Text style={StyleBall.countdownTextGreen}>查看历史记录</Text>
      </View>

    </View>
    <View style={StyleBall.ballContainer}>
      {data.map((item, index) => {
         const parsedItem = parseInt(item)-1;
         const isValidIndex = !isNaN(parsedItem) && parsedItem >= 0 && parsedItem < ballConverter.length;
         if (index > 0 && index <= 9  && isValidIndex) {

         const ballanimal=  ballConverter[parsedItem].animal;
         const ballelement=  ballConverter[parsedItem].element;
         const ballvalue=  ballConverter[parsedItem].value;
         if (ballvalue === "1") {
          imagesrc = ballRed;
        } else if (ballvalue ==="2") {
          imagesrc = ballBlue;
        } else if (ballvalue === "3") {
          imagesrc = ballGreen;
        }


         if(index == 7 ){
          return (

            <View>
              <BallText/>
            </View>
          );
         }else if(index == 9 ){
          const items = (data[7])

          const parsedItem = parseInt(items)-1;

          const ballanimal=  ballConverter[parsedItem].animal;
          const ballelement=  ballConverter[parsedItem].element;
          const ballvalue=  ballConverter[parsedItem].value;
         
          if (ballvalue === "1") {
            imagesrc = ballRed;
          } else if (ballvalue ==="2") {
            imagesrc = ballBlue;
          } else if (ballvalue === "3") {
            imagesrc = ballGreen;
          }
          return (

            <View>

              <BallWithText
              key={index-2}
              text={ballanimal+"/"+ballelement+">"}
              count={data[index-2]}
              imageSource={imagesrc}
            />
            

            </View>
          );
         }else{
          return (

           <View>
             <BallWithText
              key={index}
              text={ballanimal+"/"+ballelement}
              count={item}
              imageSource={imagesrc}
            />
           </View>

          );
         }

        } 
      })}
    </View>
    
        <View style={StyleBall.cameraContainer}>
          <Text style={[StyleBall.cameraTextRed]}> 第{data[8]}期 2023/{data[9]}/{data[10]} 星期 -  {data[12]}</Text>
       
        </View>

       <View style={{height:screenHeight/2}}>
      

       <FlatList
             showsVerticalScrollIndicator={false}
              data={LiveImage}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <LotteryCard
                  imageSource={item.image}
                  description={item.description}
                  avatarSource={item.avatar}
                  numColumns={2}
                />
              )}
              numColumns={2}
              contentContainerStyle={{ ...styles.cardList, }}
              ListHeaderComponent={HeaderComponent}
              ListFooterComponent={FooterComponent}
          />
          
       </View>
    </>
  );
};

export const BallWithText = ({ text, imageSource,count }) => {
  return (
      <View>
      <View style={StyleBall.ballGroup}>
        <Image source={imageSource} style={StyleBall.ballImage} />
        <Text style={StyleBall.centeredText}>{count}</Text>
      </View>
      <Text style={StyleBall.ballText}>{text}</Text>
      </View>
  );
};
export const BallText = ({ }) => {
  return (
      <View style={StyleBall.ballPlus}>
        <Image source={require('../../assets/icons/jiahao.png')} style={StyleBall.plusImage} />
      </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
      margin:2,
      flex: 1,
      alignItems: 'center',
    },container2: {
      margin:2,
      flex: 1,
      alignItems: 'center',
    },bgCard:{
      backgroundColor: '#e8f4ff',
    },card:{
    },
    cardText:{
      padding:8
    },greenText:{
      color:'green'
    },
    cardList:{
      marginTop:10,
      backgroundColor:'white',
      paddingTop: 16,
    },
    likeContainer: {
        marginBottom:15,
        flexDirection: 'row',
        width: '100%',
    },
    textStart: {
      alignSelf: 'flex-start',
    },
    textEnd: {
      alignSelf: 'flex-end',
    },
  });

const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textStart: {
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start',
  },
  textEnd: {
    fontSize: 14,
    color: 'green',
    alignSelf: 'flex-end',
  },
});

const StyleBall = StyleSheet.create({
  ballGroup: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  }, ballPlus: {
    position: 'relative',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop:15,
    alignItems: 'center',
    justifyContent: 'center',
  },countdownContainer:{
    marginTop:25,
    marginBottom:15,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
  },cameraContainer:{
    marginTop:15,
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
  },
  cameraTextRed:{
    fontSize: 14, color: 'red',paddingBottom:3,
  },
  ic_camera:{
    marginRight:40,
    width:25,
    height:25
  },
  ic_full:{
    marginLeft:40,
    width:20,
    height:20
  },
  mr25:{
    marginRight:25,
    }, mr14:{
      marginRight:14,
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
  ballImage: {
    width:'100%',
    aspectRatio: 8 / 8, // Set your desired aspect ratio

    // Adjust the styles for the ball image as needed
  },plusImage: {
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    width:20,
    height:20,
  },
  centeredText: {
    position: 'absolute',
    fontWeight: "500",
    paddingRight:3,
    paddingBottom:2,
    color: 'black', // Adjust the text color as needed
    fontSize: 24, // Adjust the font size as needed
  }, ballContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  tab_ball:{
    height:120,
    backgroundColor:'white',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },
  ball_group: {
    marginTop:150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ballText: {
    marginTop: 2,
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
  },
});

export default Request_BallsLottery;
