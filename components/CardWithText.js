import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const CardWithText = ({ imageSource, description, avatarSource, numColumns,likeCount  }) => {
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 32 - (numColumns - 1) * 10) / numColumns;

  return (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
      <Image source={{ uri: imageSource }} style={styles.image} resizeMode="cover" />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatarSource }} style={styles.avatar} resizeMode="cover" />
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.likeContainer}>
      <FontAwesome name="thumbs-up" size={16} color="gray" />
        <Text style={styles.likeCount}>{likeCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  likeCount: {
    marginLeft: 4,
    fontSize: 12,
    color: '#666',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    marginRight: 10,
    position: 'relative', // To contain the absolute-positioned avatar
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 8,
  },
  avatarContainer: {
    position: 'absolute',
    left: 10, // Position on the left edge of the card
    top: 100, // Adjust this value to position vertically
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default CardWithText;
