// // Starter code when you create app with `create-react-native-app`
// import React from 'react';
//
// import {
//   // An abstraction similar to CSS Stylesheets,
//   // lets you create a style reference from the given object
//   StyleSheet,
//   // React Native built-in components
//   // They also have a lot more on their site,
//   // most of them can be used for both Android and iOS,
//   // some of them are platform-specific
//   Text,
//   View,
// } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     // OREO QUIZ: WHAT'S THIS XML LOOKING PIECE OF CODE CALLED?
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

// import React from 'react';
// import BookChanger from './src/containers/BookChanger';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <BookChanger/>
//     );
//   }
// }

import React from 'react';
import { View } from 'react-native';
import BookChanger2 from './src/containers/BookChanger2';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <BookChanger2/>
        <BookChanger2/>
        <BookChanger2/>
      </View>
    );
  }
}
