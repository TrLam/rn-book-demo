import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CustomImage from '../components/CustomImage';

// Books array
import { books } from '../assets/assetData';

const BookChanger = (props) => {
  // Image reference to CustomImage from the books array
  const book = books[0].img;
  return (
    <View style={styles.container}>
      <CustomImage img={book}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default BookChanger;
