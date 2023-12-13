import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

const RefreshControlComponent = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Simulating API call with setTimeout
      setTimeout(() => {
        const newData = [
          { id: 'test', text: 'Sample Text' },
          { id: 'test2', text: 'Another Text' },
          // Add more data objects as needed
        ];
        setData(newData);
        setRefreshing(false); // Set refreshing to false after data is fetched
      }, 1000); // Simulating a delay of 1 second (1000 milliseconds)
    } catch (error) {
      console.error('Error fetching data: ', error);
      setRefreshing(false); // Set refreshing to false even if there's an error
    }
  };

  useEffect(() => {
    fetchData(); // Initial data fetch when the component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    setRefreshing(true); // Set refreshing to true when the user pulls down to refresh
    fetchData(); // Fetch new data
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Render the data */}
        {data.map(item => (
          <Text key={item.id}>{item.text}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default RefreshControlComponent;
