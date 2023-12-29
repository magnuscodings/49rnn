import React, { useState, useEffect } from 'react';
import { FlatList, View, TouchableOpacity, Text, StyleSheet, Dimensions, Modal } from 'react-native';
import { HeaderWithBackButtonRightRight } from './HeaderBackButton';
import RefreshControlComponent from './RefreshControl';
import FlatListWithPullToRefresh from './FlatListCompleteInformation';

const numColumns = 3;

const FlatListButtons = ({ apiUrl, keyname }) => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const showModal = (label) => {
    setSelectedItem(label);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) =>
  {

    return (
      <View style={[styles.item, { width: Dimensions.get('window').width / numColumns }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => showModal(item.label)}
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const modal = <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    hideModal();
  }}
>
  <View >
    <View style={styles.modalView}>
      <HeaderWithBackButtonRightRight title={selectedItem} closeModal={hideModal} />
        <FlatListWithPullToRefresh link = {"https://h5.49217009.com:8443/unite49/h5/article/search?type=4&articleTypeId=7362&pageNum=1&pageSize=10"}/>
      {/* <RefreshControlComponent/> */}
    </View>
  </View>
</Modal>

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        const arr = result.data.list;

        const updatedData = arr.map(item => ({
          key: item.articleTypeId,
          label: item.articleTypeName
        }));

        setData(updatedData);
        console.log('Updated data:', updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, keyname]);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={numColumns}
      />
      {modal}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  buttonText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalView: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%', // Set width to 100%
  },
  modalText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FlatListButtons;
