import React from 'react';
import { FlatList, View, Text } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
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
    <Text style={{ fontSize: 20 }}>Header Component</Text>
  </View>
);

const renderItem = ({ item }) => (
  <View style={{ padding: 16 }}>
    <Text>{item.title}</Text>
  </View>
);

const FlatListWithHeader = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Header />}
    />
  );
};

export default FlatListWithHeader;
