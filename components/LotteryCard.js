import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';

import HeaderWithBackButton from '../components/HeaderBackButton';
import Container from './view/ViewLottery';
import { HISTORY_LOTTTERY } from '../constant/ApiConstants';


const LotteryCard = ({ imageSource, description, avatarSource, numColumns, period,lotteryID,year }) => {
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 32 - (numColumns - 1) * 10) / numColumns;
  const [modalVisible, setModalVisible] = useState(false);

  const handleAvatarPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

 const requestLottery = HISTORY_LOTTTERY+lotteryID;
//  console.log(requestLottery)
//  console.log(lotteryID)
  // lotteryID


  return (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
      
      <TouchableOpacity onPress={handleAvatarPress}>
        <Image source={{ uri: imageSource }} style={styles.image} resizeMode="cover" />
        <View style={styles.avatarContainer}>
          <Image source={{ uri: avatarSource }} style={styles.avatar} resizeMode="cover" />
        </View>
        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContent}>
        <HeaderWithBackButton title={'开奖回放'} closeModal={closeModal}/>
        <Container title={description}  period={period} year={year} requestLink={requestLottery} />
        </View>


      </Modal>
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
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingBottom: 10,
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
    height: 125,
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
    alignSelf : 'center',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#fff',
  },
});

export default LotteryCard;
