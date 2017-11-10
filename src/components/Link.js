import React from 'react';
import {
  TouchableOpacity,
  Linking,
} from 'react-native';


const Link = (props) => {
  const { url } = props;

  const handlePress = () => Linking.openURL(url);

  return (
    <TouchableOpacity onPress={handlePress}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Link;