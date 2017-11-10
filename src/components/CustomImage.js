import React from 'react';

import {
  Image,
  StyleSheet,
} from 'react-native';

const CustomImageStyles = StyleSheet.create({
  image: {
    borderColor: 'rgba(117, 117, 117, 0.3)',
    borderWidth: 2,
    height: 500,
  },
});

// CamelCase for component name
const CustomImage = (props) => {
  const { img } = props;

  return (
    <Image
      resizeMode={'contain'}
      style={CustomImageStyles.image}
      source={img}/>
  );
};

export default CustomImage;