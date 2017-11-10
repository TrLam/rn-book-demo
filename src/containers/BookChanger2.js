import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CustomImage from '../components/CustomImage';
import CustomButton from '../components/CustomButton';
import Link from '../components/Link';

import { books } from '../assets/assetData';

// OREO QUIZ: CLASS VS. FUNCTIONAL COMPONENTS
export default class BookChanger2 extends React.Component {
  constructor(props) {
    super(props);

    // Create a state to remember which book we are displaying
    this.state = {
      currentBook: 0,
    }
  }

  // Function to switch to the next book
  changeBook = (prev, max) => () => {
    const next = prev < max - 1 ? prev + 1 : 0;

    this.setState({
      currentBook: next,
    })
  }

  render() {
    const currentBook = this.state.currentBook;

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
});
