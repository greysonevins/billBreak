import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>+</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button : {
    width: 10,
    height: 10,
    justifyContent: "center"
  }
});
