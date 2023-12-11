import React, { useState } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity,FlatList } from 'react-native';
import {HeaderWithBackButton} from '../../../../components/HeaderBackButton'
import {Toggle} from '../../../../components/ToggleSwitch'
import {Collapse} from '../../../../components/Collapse'

export const ModalLotterySite = ({ closeModal }) => {
    return (
        <View style={styles.modalContent}>
            <HeaderWithBackButton title={'开奖现场'} closeModal={closeModal} />
       
        <View style={styles.container}>
            <ThreeButtonsRow />
            
        </View>
        {/* <View style={styles.container}>
        
        </View> */}
        </View>
    );
};

const ThreeButtonsRow = () => {
    const [activeButton, setActiveButton] = useState('Button 1'); // Setting 'Button 1' as default active
  
    const handleButtonPress = (buttonName) => {
      setActiveButton(buttonName);
      // Add any other functionality you want to perform on button press
    };
  
    
  
    return (
         <>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button,styles.buttonLeft, activeButton === 'Button 1' && styles.activeButton]}
              onPress={() => handleButtonPress('Button 1')}
            >
              <Text style={[styles.buttonText, activeButton === 'Button 1' && styles.activeButtonText]}>
              澳门六合彩
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={[styles.button, activeButton === 'Button 2' && styles.activeButton]}
              onPress={() => handleButtonPress('Button 2')}
            >
              <Text style={[styles.buttonText, activeButton === 'Button 2' && styles.activeButtonText]}>
              香港六合彩
              </Text>
            </TouchableOpacity>

            
            <TouchableOpacity
              style={[styles.button,styles.buttonRight, activeButton === 'Button 3' && styles.activeButton]}
              onPress={() => handleButtonPress('Button 3')}
            >
              <Text style={[styles.buttonText, activeButton === 'Button 3' && styles.activeButtonText]}>
              台湾六合彩
              </Text>
            </TouchableOpacity>
          </View>
          <Collapse/>
         </>
      );
    };

  
const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },container: {
        marginLeft:10,
        marginRight:10,
        flex: 1,
        alignItems: 'center',
      },
      buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
        button: {
            width: '33%',
            padding: 8,
            borderColor: '#00c160',
            borderWidth: 1,
            alignItems: 'center',
        },
      buttonText: {
        color: '#00c160',
        fontSize: 16,
      },
      activeButton: {
        backgroundColor: '#00c160', 
      },
      activeButtonText:{
        color: 'white',
      },
      buttonLeft:{
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      buttonRight:{
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },
      cardList:{
        marginTop:10,
        padding:20,
        backgroundColor:'white',
        paddingHorizontal: 16,
        paddingTop: 16,
        alignItems: 'center', // Center items horizontally
      }
});





export default ModalLotterySite;
