import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActionButton 
          buttonColor="#23C475" 
          radius={110}
          startDegree={90}
          endDegree={260}
          backdrop={true}
        >


          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("book tapped!")}>
              <Image source={require('../assets/icons/ziliaodaquan.png')} style={styles.iconImage} />
          </ActionButton.Item>
     

          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("sms")}>
              <Image source={require('../assets/icons/liaotianshi.png')} style={styles.iconImage} />
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("home tap!")}>
              <Image source={require('../assets/icons/tab_tlsc.png')} style={styles.iconImage} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("dating!")}>
              <Image source={require('../assets/icons/jiaoliudating.png')} style={styles.iconImage} />
          </ActionButton.Item>

          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("play tapped!")}>
              <Image source={require('../assets/icons/kaijiangxianchang.png')} style={styles.iconImage} />
          </ActionButton.Item>
  

          {/* Add more ActionButton.Items with your custom content */}
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    justifyContent: 'flex-end', // Align to the bottom
    alignItems: 'flex-end',     // Align to the right
    position: 'absolute',
    bottom: 160, // Adjust this value to fine-tune the position from the bottom
    right: 52,  // Adjust this value to fine-tune the position from the right
  },
  actionButtonContent: {
    width:100,
    height:100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  actionButtonText: {
    fontSize: 14,
    color: 'white',
  },
});

export default App;
