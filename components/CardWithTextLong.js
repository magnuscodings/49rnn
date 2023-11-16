import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CardWithTextLong = ({ imageSource, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imageSource }} style={styles.image} resizeMode="cover" />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Click to Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 8,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  description: {
    flex: 1,
    fontSize: 16,
    fontWeight:'bold',
    color: 'black',
    textAlign: 'left',
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth:1,
    borderColor:'#07c160'
  },
  buttonText: {
    color: '#07c160',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CardWithTextLong;
