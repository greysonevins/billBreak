import React, { Component } from 'react';
import Header from './Header';
import Content from './Content'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ListView,
  Keyboard,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      loading: true,
      allComplete: false,
      filter: "ALL",
      value: "",
      items: [],
      dataSource: ds.cloneWithRows([])
    }
  }
  render() {
    return (
      <View>
        <Header />
        <Content />
      </View>
    )
  }
 }
