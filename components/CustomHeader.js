import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, TouchableOpacity } from 'react-native';

const CustomHeader = ({ children }) => {
  return (
    <SafeAreaView 
      style={{
        width: '100%',
        height: 120,
        backgroundColor: Platform.OS === 'ios' ? '#07c160' : '#07c160',
        position: 'relative',
        borderBottomLeftRadius: Platform.OS === 'ios' ? 2 : 3,
        borderBottomRightRadius: Platform.OS === 'ios' ? 2 : 3,
        zIndex: 1, 
      }}
    >


      {/* Existing children */}
      {children}


    </SafeAreaView>
  );
};

export default CustomHeader;
