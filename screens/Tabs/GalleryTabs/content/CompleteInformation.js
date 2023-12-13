import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, Button,TouchableOpacity } from 'react-native';
import {HeaderWithBackButtonRight} from '../../../../components/HeaderBackButton'
import { Feather,AntDesign } from '@expo/vector-icons';
import * as link from '../../../../constant/ApiConstants'; // Import the set you need
import { LinkRequest } from '../../../../components/request/getlinkCompleteInformation';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import FlatListThreeColumnButtons from '../../../../components/FlatListThreeColumn';

export const ModalCompleteInformation = ({ closeModal }) => {

    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        // Perform search logic using the searchText
        console.log('Search for:', searchText);
      };
    

      const search = <View style={styles.searchContainer}>
                       <TouchableOpacity
                        style={styles.searchButton}
                        onPress={handleSearch}
                        >
                            <Feather name="search" size={24} color="gray" />
                        </TouchableOpacity>
                        <TextInput
                        style={styles.searchInput}
                        placeholder="搜索相关标题文章"
                        value={searchText}
                        onChangeText={setSearchText}
                        />
                        
                    </View>;



    return (
        <View style={styles.modalContent}>
            <HeaderWithBackButtonRight  title={'澳门资料大全'} closeModal={closeModal} />
            {search}

            <View style={styles.linkMainContainer}>
                {/* <LinkRequest apiUrl={'https://h5.49217005.com:8443/unite49/h5/article/listArticleType?type=4&lotteryType=2'} keyname='k'/> */}
                <FlatListThreeColumnButtons apiUrl={'https://h5.49217005.com:8443/unite49/h5/article/listArticleType?type=4&lotteryType=2'} keyname='k' />
            
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: 'white',
      overflow: 'hidden',
    },
    searchInput: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    searchButton: {
      padding: 10,
    },linkMainContainer:{
        marginTop:15,
      },
});

  
export default ModalCompleteInformation;
