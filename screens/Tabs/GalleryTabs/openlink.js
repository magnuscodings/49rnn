import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Modal, View } from 'react-native';
import ModalLotterySite from './content/LotterySite'; 
import ModalCompleteInformation from './content/CompleteInformation'; 
import ModalInformationStatistics from './content/InformationStatistics'; 
import ModalQueryAssistant from './content/QueryAssistant'; 
import ModalHumorousGuess from './content/HumorousGuess'; 
import ModalLiuheGallery from './content/LiuheGallery'; 
import ModalExpertForum from './content/ExpertForum'; 
import ModalToolChest from './content/ToolChest'; 

export const GalleryComponent = ({ imagesource, imagetext, keyname ,imageList }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openToNewScreen = () => {
        setModalVisible(true);
    };

    const closeNewScreen = () => {
        setModalVisible(false);
    };

    var modal = '';

    if(keyname === 'gallerytab1'){
        modal = <ModalLotterySite imageList={imageList} closeModal={closeNewScreen} />
    }else if(keyname === 'gallerytab2'){
        modal = <ModalCompleteInformation closeModal={closeNewScreen} />
    }else if(keyname === 'gallerytab3'){
        modal = <ModalInformationStatistics closeModal={closeNewScreen} />
    }else if(keyname === 'gallerytab4'){
        modal = <ModalQueryAssistant closeModal={closeNewScreen} />
    }else if(keyname === 'gallerytab5'){
        modal = <ModalHumorousGuess closeModal={closeNewScreen} />
    }else if(keyname === 'gallerytab6'){
        modal = <ModalLiuheGallery closeModal={closeNewScreen} />
    }else if(keyname === 'gallerytab7'){
        modal = <ModalExpertForum closeModal={closeNewScreen} />
    }else if(keyname === 'gallerytab8'){
        modal = <ModalToolChest closeModal={closeNewScreen} />
    }



    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openToNewScreen} style={styles.button} key={keyname}>
                <Image source={imagesource} style={styles.image_icon} />
                <Text style={styles.buttonText}>{imagetext}</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeNewScreen}
            >
                <View style={styles.modalContainer}>
                    {modal}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
    },
    buttonText: {
        marginTop: 7,
        fontSize: 14,
        textAlign: 'center',
    },
    image_icon: {
        height: 55,
        width: 55,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GalleryComponent;
