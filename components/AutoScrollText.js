import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';

const AutoScrollText = ({ text, scrollSpeed }) => {
  const screenWidth = Dimensions.get('window').width;
  const textWidth = text.length * 10; // Adjust as needed

  const scrollX = useRef(new Animated.Value(screenWidth)).current;

  useEffect(() => {
    const animationDuration = textWidth / scrollSpeed;

    const animation = Animated.timing(scrollX, {
      toValue: -textWidth,
      duration: animationDuration,
      useNativeDriver: false, // Disable native driver due to transform animation
    });

    Animated.loop(animation).start();
  }, [scrollSpeed, textWidth]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textContainer, { transform: [{ translateX: scrollX }] }]}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 16, // Customize as needed
  },
});

export default AutoScrollText;
