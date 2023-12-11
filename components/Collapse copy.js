import React, { useState } from 'react';
import { View, Text,Image, TouchableOpacity,StyleSheet,FlatList } from 'react-native';
import expand from '../assets/icons/ic_expand.png';
import hide from '../assets/icons/ic_hide.png';
import { Request_Balls } from '../components/request/balls'; // Import the set you need
import * as link from '../constant/ApiConstants'; // Import the set you need
import LotteryCard from '../components/LotteryCard'

const LiveImage = [
  {
    image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/2511619/20230813171700-020230813171700-water.jpg',
    description: 'Beautiful landscape view',
    avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
    like:20,
  },
  {
    image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/2511619/20230813171631-020230813171630-water.jpg',
    description: 'Serene lake reflection',
    avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
    like:10,
  },
  {
    image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/2511619/20230813171631-020230813171630-water.jpg',
    description: 'Majestic mountains',
    avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
    like:40
  },
  {
    image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/2511619/20230813171605-020230813171604-water.jpg',
    description: 'Calm river',
    avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
    like:21
  }
];
export const Collapse = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View>
        {!collapsed && (
        <View style={[styles.container,style={backgroundColor:'blue'}]}>
          <Text>Collapsible content goespsible content goes hereapsible content goes herea herea..</Text>
        </View>
      )}
      <View style={styles.container2}>

        <TouchableOpacity style={{marginTop:10}}  onPress={toggleCollapse}  >
          <Image style={{width:130,height:25}}  source={collapsed ? hide : expand}  />
        </TouchableOpacity>   
        <View style={StyleBall.tab_ball}>
          <View style={StyleBall.ball_group}>
              <Request_Balls apiUrl={link.DEFUALT_AUBALLS} key={0} keyname='k' indexs="5" hidecamera="hide" />
          </View>
        </View>

        <View style={styles.likeContainer}>
            <Text style={styles.textStart}>开奖回放</Text>
            <Text style={styles.textEnd}>更多开奖回放</Text>
          </View>

        <FlatList
            data={LiveImage}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <LotteryCard
                imageSource={item.image}
                description={item.description}
                avatarSource={item.avatar}
                numColumns={2}
                likeCount={item.like}
              />
            )}
            numColumns={2}
            contentContainerStyle={{ ...styles.cardList, paddingBottom: 150 }}
          />
      </View>

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
  },
  cardList:{
    marginTop:10,
    padding:20,
    backgroundColor:'white',
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: 'center', // Center items horizontally
  },
  likeContainer: {
    marginBottom:15,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
  },
  textStart: {
    alignSelf: 'flex-start',
  },
  textEnd: {
    alignSelf: 'flex-end',
  },
});

const StyleBall = StyleSheet.create({
  tab_ball:{
    marginTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20
  },
  ball_group: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

export default Collapse;
