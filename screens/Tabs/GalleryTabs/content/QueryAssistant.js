import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {HeaderWithBackButton} from '../../../../components/HeaderBackButton'

export const ModalQueryAssistant = ({ closeModal }) => {
    return (
        <View style={styles.modalContent}>
            <HeaderWithBackButton  title={'开奖现场'} closeModal={closeModal} />
            <Text>Query Assistant</Text>
            {/* Add content for the new screen here */}
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
});
export default ModalQueryAssistant;
