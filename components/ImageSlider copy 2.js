import React, { useState, useRef, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const ImageSlider = ({ imageUrls, slideWidth = Dimensions.get('window').width, slideHeight = 200, paginationBottom = 8, autoplayInterval = 1000 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);
  let autoplayTimer = null;

  const handleScroll = (event) => {
    const page = Math.round(
      event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
    );
    setCurrentPage(page);
  };

  const scrollToNextPage = () => {
    if (scrollViewRef.current) {
      const nextPage = (currentPage + 1) % imageUrls.length;
      scrollViewRef.current.scrollTo({
        x: nextPage * slideWidth,
        animated: true,
      });
    }
  };

  useEffect(() => {
    autoplayTimer = setInterval(scrollToNextPage, autoplayInterval);
    return () => {
      clearInterval(autoplayTimer);
    };
  }, [currentPage]);

  const handleImageClick = () => {
    // Handle image click action here
    alert('Image clicked!');
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onTouchStart={() => clearInterval(autoplayTimer)}
        onTouchEnd={() => {
          clearInterval(autoplayTimer);
          autoplayTimer = setInterval(scrollToNextPage, autoplayInterval);
        }}
      >
        {imageUrls.map((imageUrl, index) => (
          <TouchableOpacity key={index} onPress={handleImageClick}>
            <View style={[styles.slide, { width: slideWidth, height: slideHeight }]}>
              <Image source={{ uri: imageUrl }} style={[styles.image, { width: slideWidth, height: '100%' }]} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={[styles.pagination, { bottom: paginationBottom, width: slideWidth }]}>
        <View style={styles.dotContainer}>
          {imageUrls.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentPage ? styles.activeDot : null,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
  },
});

export default ImageSlider;
