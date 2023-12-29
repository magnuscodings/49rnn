import React, { useState } from 'react';
import { FlatList, View, Text, RefreshControl,StyleSheet } from 'react-native';

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

const Header = () => (
  <View style={{ padding: 16, backgroundColor: 'lightblue' }}>
    <Text style={{ fontSize: 20 }}>Sticky Headerrr</Text>
  </View>
);

const renderItem = ({ item }) => (
  <View style={{ padding: 16 }}>
    <Text>{item.title}</Text>
  </View>
);

const FlatListWithPullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a data refresh, replace this with your actual refresh logic
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulated delay, replace with your actual refresh logic
  };

  return (
    <FlatList
      data={data}
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
})
