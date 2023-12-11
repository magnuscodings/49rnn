import React, { useState, useEffect } from 'react';
import { View, Dimensions,Linking } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import OpenLink from './Linking';

const ImageSlider = ({ images ,imageListName}) => {
  const [width, setWidth] = useState(Dimensions.get('window').width);

//  console.log(imageListName)

  return (
      <SliderBox
        images={images}
        onCurrentImagePressed={(index) => //console.log(imageListName[index]) 
           Linking.openURL(imageListName[index])
        }
        // currentImageEmitter={(index) => console.warn(`current pos is: ${index}`)}
        parentWidth={width} // Use the width state
        sliderBoxHeight={230}
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
