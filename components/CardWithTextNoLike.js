import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const CardWithTextNoLike = ({ imageSource, description, avatarSource, numColumns  }) => {
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 32 - (numColumns - 1) * 10) / numColumns;

  return (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
      <Image source={{ uri: imageSource }} style={styles.image} resizeMode="cover" />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    marginRight: 10,
    position: 'relative', // To contain the absolute-positioned avatar
  },
  image: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    marginBottom: 8,
    resizeMode:'contain'
  },
  description: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default CardWithTextNoLike;
