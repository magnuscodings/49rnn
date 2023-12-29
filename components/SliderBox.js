import React, { useState, useEffect } from 'react';
import { View, Dimensions,Linking } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const ImageSlider = ({ images, imageListName, height = 230 }) => {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [sliderHeight, setSliderHeight] = useState(height);

  useEffect(() => {
    setSliderHeight(height || 230); // Set the height to prop value or default (230)
  }, [height]);
//  console.log(imageListName)

  return (
      <SliderBox
        images={images}
        onCurrentImagePressed={(index) => //console.log(imageListName[index]) 
           Linking.openURL(imageListName[index])
        }
        // currentImageEmitter={(index) => console.warn(`current pos is: ${index}`)}
        parentWidth={width} // Use the width state
        sliderBoxHeight={sliderHeight}
        resizeMethod={'resize'}
        resizeMode={'contain'}
        circleLoop={true}
        dotColor="#fff"
        autoplay={true}
        autoplayInterval={3000}
        inactiveDotColor="#90A4AE"
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 15,
            marginHorizontal: -10,
            margin: 0
          }}
          paginationBoxVerticalPadding={55}

      />
  );
};

export default ImageSlider;
