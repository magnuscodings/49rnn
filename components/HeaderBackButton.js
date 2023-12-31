import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Make sure to install the @expo/vector-icons package
import calendar from '../assets/icons/calendar.png';
import search from '../assets/icons/search.png';

export const HeaderWithBackButton = ({ title, closeModal }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={closeModal} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.headerText}>{}</Text>
    </View>
  );
};


export const HeaderWithBackButtonRight = ({ title, closeModal }) => {
  return (
    <View style={styles.header1}>
      <TouchableOpacity onPress={closeModal} >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>

      <TouchableOpacity onPress={closeModal} >
        <Image source={calendar}  />
      </TouchableOpacity>

    </View>
  );
};

export const HeaderWithBackButtonRightRight = ({ title, closeModal }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={closeModal} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>

      <View style={styles.row}>
          <TouchableOpacity style={styles.backButton2}>
            <Image style={styles.search} source={search} />
            <Text style={styles.backText}>选择年份</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton3}>
            <Image style={styles.calendar} source={calendar} />
            <Text style={styles.backText}>搜索</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  header1: 
  {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Use space-between for better distribution
    backgroundColor: '#fff',
    height: 50, // Set a fixed height or adjust accordingly
    paddingHorizontal: 16, // Add padding for better spacing
  },
  header: 
  {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Use space-between for better distribution
    backgroundColor: '#fff',
    height: 50, // Set a fixed height or adjust accordingly
    paddingHorizontal: 16, // Add padding for better spacing
  },
  row:
  {
    flexDirection: 'row',
    alignContent : 'center',
  },
  headerText: 
  {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'end', // Centers the text vertically
  },
  backButton: 
  {
    // Adjust styles if needed
  },
  buttonContainer: 
  {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton2: 
  {
    textAlign:'center',
    flexDirection: 'column',
    marginLeft: 'auto', // Pushes the button to the right end
    marginRight: 5,
  },
  backButton3:
   {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 0,
  },
  search: 
  {
    alignSelf:'center',
    width: 20,
    height: 20,
    marginTop: 6, // Add margin for text spacing
  },
  calendar: 
  {
    alignSelf:'center',
    width: 24,
    height: 24,
    marginTop: 2, // Add margin for text spacing
  },
  buttonText: 
  {
    fontSize: 12,
  },
  backText:
  {
    color:'#0ac163'
  }
});

export default HeaderWithBackButton;
