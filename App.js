// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import CustomImage from './src/components/CustomImage';
import CustomButton from './src/components/CustomButton';
import Link from './src/components/Link';

import { books } from './src/assets/assetData';

export default class App extends React.Component {
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
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    // flex: 0.3,
    // height: 100,
  }
});
