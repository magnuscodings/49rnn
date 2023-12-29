import React, { useState } from 'react';
import { ScrollView,FlatList, View, Text, RefreshControl,StyleSheet,Image,TouchableOpacity } from 'react-native';
import icon from '../assets/icon.png';
import reward from '../assets/icons/reward.png';

const data = [
  { id: '1', title: 'Item Flatss' },
  { id: '2', title: 'Item 2' },
  { id: '4', title: 'Item 2' },
  { id: '5', title: 'Item 2' },
  { id: '6', title: 'Item 2' },
  { id: '7', title: 'Item 2' },
  { id: '8', title: 'Item 2' },
  { id: '9', title: 'Item 2' },
  { id: '10', title: 'Item 2' },
  { id: '11', title: 'Item 2' },
  { id: '12', title: 'Item 2' },
  { id: '13', title: 'Item 2' },
  { id: '14', title: 'Item 2' },
  { id: '15', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  // Add more items as needed
];

// const StickyHeader = () => (
//   <View style={{ padding: 16, backgroundColor: 'lightblue' }}>
//     <Text style={{ fontSize: 20 }}>Sticky Header</Text>
//   </View>
// );


const StickyHeader = () => (
<View style={{ padding: 16, backgroundColor: 'white', shadowColor: '#000' }}>
    <View style={[styles.row,{justifyContent:'space-between'}]}> 
    <Image
          style={{ width: 70, height: 70, borderRadius: 50 }}
          source={icon}
        />
      <View style={{justifyContent:'center',marginRight:40}}>
      <Text style={{ fontSize: 16,marginBottom:10 }}>澳门大陆仔资料员</Text>
      <Text style={{ fontSize: 14,color:'gray' }}>2023-12-18 22:22</Text>
      
      </View>
      <View style={[styles.row,{justifyContent:'center',alignItems:'center'}]}>
      <Image
          style={{ width: 40, height: 40,marginRight:10, borderRadius: 10 }}
          source={reward}
        />
          <TouchableOpacity>
             <Text style={{backgroundColor:'#00c160',color:'white',paddingTop:10,paddingBottom:10,paddingLeft:15,paddingRight:15,borderRadius:50}}>历史帖子</Text>
          </TouchableOpacity>
         
      </View>
    </View>
  </View>
);

const Heading = ({ heading }) => (
  <View style={{padding:5}}>
    {heading}
  </View>
);


const FlatListWithPullToRefresh = ({ header }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a data refresh, replace this with your actual refresh logic
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulated delay, replace with your actual refresh logic
  };

  return (
    <ScrollView
      stickyHeaderIndices={[1]} // Index 1 refers to the StickyHeader
      >
      <Heading heading={header} />
      <StickyHeader />
      {data.map((item) => (
        <View key={item.id} style={{ padding: 16 }}>
          <Text>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default FlatListWithPullToRefresh;
const styles = StyleSheet.create({
  row:
  {
    flexDirection: 'row',
    alignContent : 'center',
  },
})