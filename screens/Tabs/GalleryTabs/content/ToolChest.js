import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const ModalToolChest = ({ closeModal }) => {
    return (
        <View style={styles.modalContent}>
            <Text>Tool Chest</Text>
            {/* Add content for the new screen here */}
            <Button title="Close" onPress={closeModal} />
        </View>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ModalToolChest;
