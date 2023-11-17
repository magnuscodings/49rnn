// Import the necessary modules
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet,Image} from 'react-native'
import ballRed from '../../assets/icons/ball_red.png';
import ballBlue from '../../assets/icons/ball_blue.png';
import ballGreen from '../../assets/icons/ball_green.png';


export const Request_Balls = ({ apiUrl, keyname }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();

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

  return (
    <>
      {data.map((item, index) => {
         const parsedItem = parseInt(item)-1;
         const isValidIndex = !isNaN(parsedItem) && parsedItem >= 0 && parsedItem < ballConverter.length;
         if (index > 0 && index <= 7 && isValidIndex) {

         const ballanimal=  ballConverter[parsedItem].animal;
         const ballelement=  ballConverter[parsedItem].element;
         const ballvalue=  ballConverter[parsedItem].value;
         
         console.log(ballvalue)

         if (ballvalue === "1") {
           imagesrc = ballRed;
         } else if (ballvalue ==="2") {
           imagesrc = ballBlue;
         } else if (ballvalue === "3") {
           imagesrc = ballGreen;
         }
         console.log(imagesrc)

         return (

          <BallWithText
            key={index}
            text={ballelement+"/"+ballanimal+">"}
            count={item}
            imageSource={imagesrc}
          />
        );

        } 
        // retusrn null; // Return null for indices outside the specified range
      })}
    </>
  );
};

const BallWithText = ({ text, imageSource,count }) => {
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
  },
  ballText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

// converter 

// const ballConverter = [
//   { animal: ('Rabbit'), element: ('Money'), value: '1' }, //1
//   { animal: ('Tiger'), element: ('Money'), value: '1' }, //2
//   { animal: ('Ox'), element: ('Soil'), value: '2' }, //3
//   { animal: ('Mouse'), element: ('Soil'), value: '2' }, //4
//   { animal: ('Pig'), element: ('Wood'), value: '3' }, //5
//   { animal: ('Dog'), element: ('Wood'), value: '3' }, //6
//   { animal: ('Chicken'), element: ('Fire'), value: '1' }, //7
//   { animal: ('Monkey'), element: ('Fire'), value: '1' }, //8
//   { animal: ('Sheep'), element: ('Money'), value: '2' }, //9
//   { animal: ('Horse'), element: ('Money'), value: '2' }, //10
//   { animal: ('Snake'), element: ('Water'), value: '3' }, //11
//   { animal: ('Dragon'), element: ('Water'), value: '1' }, //12
//   { animal: ('Rabbit'), element: ('Wood'), value: '1' }, //13
//   { animal: ('Tiger'), element: ('Wood'), value: '2' }, //14
//   { animal: ('Ox'), element: ('Fire'), value: '2' }, //15
//   { animal: ('Mouse'), element: ('Fire'), value: '3' }, //16
//   { animal: ('Pig'), element: ('Soil'), value: '3' }, //17
//   { animal: ('Dog'), element: ('Soil'), value: '1' }, //18
//   { animal: ('Chicken'), element: ('Water'), value: '1' }, //19
//   { animal: ('Monkey'), element: ('Water'), value: '2' }, //20
//   { animal: ('Sheep'), element: ('Wood'), value: '3' }, //21
//   { animal: ('Horse'), element: ('Wood'), value: '3' }, //22
//   { animal: ('Snake'), element: ('Money'), value: '1' }, //23
//   { animal: ('Dragon'), element: ('Money'), value: '1' }, //24
//   { animal: ('Rabbit'), element: ('Soil'), value: '2' }, //25
//   { animal: ('Tiger'), element: ('Soil'), value: '2' }, //26
//   { animal: ('Ox'), element: ('Water'), value: '3' }, //27
//   { animal: ('Mouse'), element: ('Water'), value: '3' }, //28
//   { animal: ('Pig'), element: ('Fire'), value: '1' }, //29
//   { animal: ('Dog'), element: ('Fire'), value: '1' }, //30
//   { animal: ('Chicken'), element: ('Money'), value: '2' }, //31
//   { animal: ('Monkey'), element: ('Money'), value: '3' }, //32
//   { animal: ('Sheep'), element: ('Soil'), value: '3' }, //33
//   { animal: ('Horse'), element: ('Soil'), value: '1' }, //34
//   { animal: ('Snake'), element: ('Wood'), value: '1' }, //35
//   { animal: ('Dragon'), element: ('Wood'), value: '2' }, //36
//   { animal: ('Rabbit'), element: ('Fire'), value: '2' }, //37
//   { animal: ('Tiger'), element: ('Fire'), value: '3' }, //38
//   { animal: ('Ox'), element: ('Money'), value: '3' }, //39
//   { animal: ('Mouse'), element: ('Money'), value: '1' }, //40
//   { animal: ('Pig'), element: ('Water'), value: '2' }, //41
//   { animal: ('Dog'), element: ('Water'), value: '2' }, //42
//   { animal: ('Chicken'), element: ('Wood'), value: '3' }, //43
//   { animal: ('Monkey'), element: ('Wood'), value: '3' }, //44
//   { animal: ('Sheep'), element: ('Fire'), value: '1' }, //45
//   { animal: ('Horse'), element: ('Fire'), value: '1' }, //46
//   { animal: ('Snake'), element: ('Soil'), value: '2' }, //47
//   { animal: ('Dragon'), element: ('Soil'), value: '2' }, //48
//   { animal: ('Rabbit'), element: ('Water'), value: '3' } //
// ];

const ballConverter = [
  { animal: ('兔'), element: ('金'), value: '1' }, //1
  { animal: ('老虎'), element: ('金'), value: '1' }, //2
  { animal: ('牛'), element: ('土'), value: '2' }, //3
  { animal: ('老鼠'), element: ('土'), value: '2' }, //4
  { animal: ('猪'), element: ('木头'), value: '3' }, //5
  { animal: ('狗'), element: ('木头'), value: '3' }, //6
  { animal:('鸡'), element:( '火'), value : '1' },//7
  { animal: ('猴'), element: ('火'), value: '1' }, //8
  { animal: ('羊') , element: ('金') , value: '2' },//9
  { animal: ('马'), element: ('金'), value: '2' }, //10
  { animal: ('蛇') , element: ('水') , value: '3' },//11
  { animal: ('龙'), element: ('水'), value: '1' }, //12
  { animal: ('兔'), element: ('木头'), value: '1' }, //13
  { animal: ('老虎'), element: ('木头'), value: '2' }, //14
  { animal: ('牛'), element: ('火'), value: '2' }, //15
  { animal: ('老鼠'), element: ('火'), value: '3' }, //16
  { animal: ( '猪') , element: ('土') , value: '3' },//17
  { animal: ('狗') , element: ('土') , value: '1' },//18
  { animal: ('鸡') , element: ('水') , value: '1' },//19
  { animal: ('猴'), element: ('水'), value: '2' }, //20
  { animal: ('羊'), element: ('木头'), value: '3' }, //21
  { animal: ('马') , element: ('木') , value: '3' },//22
  { animal: ('蛇'), element: ('金'), value: '1' }, //23
  { animal: ('龙'), element: ('金'), value: '1' }, //24
  { animal: ('兔') , element: ('土') , value: '2' },//25
  { animal: ('老虎') , element: ('土') , value: '2' },//26
  { animal: ('牛') , element: ('水') , value: '3' },//27
  { animal: ('老鼠') , element: ('水') , value: '3' },//28
  { animal: ('猪') , element: ('火') , value: '1' },//29
  { animal: ('狗') , element: ('火') , value: '1' },//30
  { animal: ('鸡') , element: ('金') , value: '2' },//31
  { animal: ('猴'), element: ('金'), value: '3' }, //32
  { animal: ('羊') , element: ('土') , value: '3' },//33
  { animal: ('马') , element: ('土') , value: '1' },//34
  { animal: ('蛇'), element: ('木'), value: '1' }, //35
  { animal: ('龙'), element: ('木'), value: '2' }, //36
  { animal: ('兔') , element: ('火') , value: '2' },//37
  { animal: ('老虎') , element: ('火') , value: '3' },//38
  { animal: ('牛'), element: ('金'), value: '3' }, //39
  { animal: ('老鼠'), element: ('金'), value: '1' }, //40
  { animal: ('猪') , element: ('水') , value: '2' },//41
  { animal: ('狗') , element: ('水') , value: '2' },//42
  { animal: ('鸡') , element: ('木') , value: '3' },//43
  { animal: ('猴'), element: ('木头'), value: '3' }, //44
  { animal: ('羊') , element: ('火') , value: '1' },//45
  { animal: ('马') , element: ('火') , value: '1' },//46
  { animal: ('蛇') , element: ('土') , value: '2' },//47
  { animal: ('龙'), element: ('土'), value: '2' }, //48
  { animal: ('兔') , element: ('水') , value: '3' } //
];