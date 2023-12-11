// CustomTabs.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabs = ({ tabs, content }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabPress = (index) => {
      setActiveTab(index);
    };
  return (
    <View style={styles.tabsContainer}>
    <View style={styles.tabButtons}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabButton,
            index === activeTab && styles.activeTab,
            index > 0 && styles.tabWithGap,
          ]}
          onPress={() => handleTabPress(index)}
        >
          <Text style={[styles.tabText, index === activeTab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.tabContent}>
      {content[activeTab]}
    </View>
  </View>

  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    padding:10,
    flex: 1,
    backgroundColor:'white'
  },
  tabButtons: {
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderWidth: 0.8,
    borderColor: '#07C160',
    
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical: 5,
    height:45,
    borderWidth: 0.8,
    borderColor: '#07C160',
  },
  activeTab: {
    backgroundColor: '#07C160',
  },
  tabText: {
    fontSize: 17,
    color: '#07C160',
    textAlign:'center'
  },
  activeTabText: {
    color: 'white',
  },
  tabContent: {
    padding: 10,
  },
});

export default CustomTabs;
