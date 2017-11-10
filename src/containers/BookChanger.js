import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CustomImage from '../components/CustomImage';
import CustomButton from '../components/CustomButton';
import Link from '../components/Link';

import { books } from '../assets/assetData';

export default class BookChanger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBook: 0,
    }
  }

  changeBook = (prev, max) => () => {
    const next = prev < max - 1 ? prev + 1 : 0;
    this.setState({
      currentBook: next,
    })
  }

  render() {
    const currentBook = this.state.currentBook;
    console.log('currentBook', currentBook);

    return (
      <View style={styles.container}>
        <Link url={books[currentBook].url}>
          <CustomImage img={books[currentBook].img}/>
        </Link>
        <CustomButton
          onPress={this.changeBook(currentBook, books.length)}
          title='Next'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    // flex: 0.3,
    // height: 100,
  }
});
