import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(117, 207, 150)',
    // width: 100,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 14,
  }
});

const CustomButton = (props) => {
  const {
    title,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
};

export default CustomButton;