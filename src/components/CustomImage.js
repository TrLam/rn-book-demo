import React from 'react';

import {
  Image,  // React-native built-in component
  StyleSheet, // An abstraction similar to CSS Stylesheets
} from 'react-native';

// Create a style reference from the given object
const CustomImageStyles = StyleSheet.create({
  image: {
    borderColor: 'rgba(117, 117, 117, 0.3)',
    borderWidth: 2,
    height: 500,
  },
});

// Function!!!
const CustomImage = (props) => {  // CamelCase for component name
  // Props: Parameters passed to your components to customize them
  // OREO QUIZ: NAME ONE ADVANTAGE OF HAVING PROPS
  const { img } = props;  // Pass img reference as props

  return (
    <Image
      resizeMode={'contain'}
      style={CustomImageStyles.image}
      source={img}/>
  );
};

export default CustomImage;