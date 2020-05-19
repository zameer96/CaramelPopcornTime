import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';
// import MovieListing from './screens/MovieListing';
// import MovieDetail from './screens/MovieDetail';
import MovieStackNavigator from './navigations/app-navigator';


export default function App() {
  return <MovieStackNavigator />
  // return (
  //   // <View style={styles.container}>
  //   //   <Text>Open up App.js to start working on your app!</Text>
  //   // </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
