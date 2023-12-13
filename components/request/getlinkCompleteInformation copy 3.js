import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { OpenLink } from '../Linking';
import { ScrollView } from 'react-native-gesture-handler';

export const LinkRequest = ({ apiUrl, keyname }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        const arr = result.data.list;

        setData(arr); // Update the state with the fetched data
        console.log('Updated data:', arr); // Log the updated data here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, keyname]);
  
  const renderButtons = () => {
    const buttonRows = [];
    for (let i = 0; i < data.length; i += 3) {
      const buttons = [];
      for (let j = i; j < i + 3 && j < data.length; j++) {
        buttons.push(
          <TouchableOpacity key={j} style={styles3.button}>
            <Text>{data[j].articleTypeName}</Text>
          </TouchableOpacity>
        );
      }
      buttonRows.push(
        <View style={styles3.row} key={i}>
          {buttons}
        </View>
      );
    }
    return buttonRows;
  };

  return <View>
    {renderButtons()}


    
  
  </View>;
};

export default LinkRequest;

const styles3 = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // To evenly space buttons in a row
    marginBottom: 10, // Add some space between rows
  },
  button: {
    flex: 1, // Each button takes an equal portion of space in a row
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
