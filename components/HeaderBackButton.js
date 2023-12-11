import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Make sure to install the @expo/vector-icons package

export const HeaderWithBackButton = ({ title, closeModal }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={closeModal} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the content horizontally
    backgroundColor: '#fff',
    height: '5%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  backText: {
    fontSize: 16,
    marginLeft: 6,
  },
});

export default HeaderWithBackButton;
