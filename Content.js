/* @flow */

import React, { Component } from 'react';
import DeleteBill from './DeleteBill'

import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

class Content extends Component {
  render() {
    return (
      <View>
          <DeleteBill noBill={this.props.noBill}/>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            keyboardType = 'numeric'
            placeholder="bool"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    flex: 1,
    marginLeft: 16,
    marginTop: 100,
    height: 20
  }
});

export default Content;
