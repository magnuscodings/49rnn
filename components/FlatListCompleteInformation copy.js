import React, { useState,useEffect } from 'react';
import { FlatList, View, Text, RefreshControl, StyleSheet,Image } from 'react-native';
import SliderBox from './SliderBox';
import icon from '../assets/icon.png';
  const imageList = [
    "https://jmz.zaojiao365.net:4949/unite49files/amyd/2022/04/03/20220403200039--1715100889.jpg",
    "https://jmz.zaojiao365.net:4949/unite49files/amyd/2023/11/28/20231128130946-2011829709.png"
  ];
  const imageListName = [
    "https://jmz.zaojiao365.net:4949/unite49files/amyd/2022/04/03/20220403200039--1715100889.jpg",
    "https://jmz.zaojiao365.net:4949/unite49files/amyd/2023/11/28/20231128130946-2011829709.png"
  ];

  // https://h5.49217009.com:8443/unite49/h5/article/search?type=4&articleTypeId=7362&pageNum=1&pageSize=10


  

const Header = () => (
  <View style={{  backgroundColor: 'white' }}>
    <SliderBox images={imageList} imageListName = {imageListName} height={100}/>
  </View>
);

const renderItem = ({ item }) => {
  // console.log(item.headPic); // Logging the item object
  return (
  <View style={{ padding: 16}}>
        <View style={styles.row}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 50 }}
          source={icon}
          onLoad={() => console.log('Image loaded successfully')}
          onError={(error) => console.log('Image load error:', error)}
        />

            {/* <Image style={{width:50,height:50,borderRadius:50}} source={item.headPic}  /> */}
            <View style={{marginLeft:10,justifyContent:'center'}}>
              <Text >{item.username}</Text>
              <Text>{item.createTime}</Text>
            </View>
        </View>
        <View style={[styles.row,styles.mt5,styles.mb10]}>
           <Text style={{marginTop:5,fontSize:17}}>{item.title}</Text>
        </View>
        <View style={[styles.row,styles.mt5]}>
          
          <View style={[styles.row,styles.like]}>
          <Image style={{width:26,height:26}} source={require('../assets/icons/ic_like.png')}  />
          <Text style={styles.count}>{item.thumbUpCount}</Text>
          </View>

          <View style={[styles.row,styles.like,styles.ml5]}>
          <Image style={{width:26,height:26}} source={require('../assets/icons/ic_like.png')}  />
          <Text style={styles.count}>{item.commentCount}</Text>
          </View>
           
        </View>
  </View>
)
};

const FlatListWithPullToRefresh = ({link}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // const link ='https://h5.49217009.com:8443/unite49/h5/article/search?type=4&articleTypeId=7362&pageNum=1&pageSize=10';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);
        const result = await response.json();

        if (result.data.list) {
          setList(result.data.list);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [link]);



  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a data refresh, replace this with your actual refresh logic
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulated delay, replace with your actual refresh logic
  };

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Header />}
      stickyHeaderIndices={[0]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#9Bd35A', '#689F38']}
          tintColor="#689F38"
          title="Pull to refresh..."
          titleColor="#000"
          progressBackgroundColor="#fff"
        />
      }
    />
    
  );
};

export default FlatListWithPullToRefresh;
const styles = StyleSheet.create({
    row:
    {
      flexDirection: 'row',
      alignContent : 'center',
  
    },
    mt5 : 
    {
      marginTop : 5
    },
    mb10 : 
    {
      marginBottom : 10
    },
    ml5 : 
    {
      marginLeft : 5
    },
    like : 
    {
      alignItems : 'center'
    },
    count : 
    {
      paddingLeft:5,
      paddingTop:5
    }
})