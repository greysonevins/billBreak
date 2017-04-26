import React, { Component } from 'react';
import Content from './Content'
import AddBill from './AddBill'


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
      types: ["food", "drinks", "dessert", "app"],
      bill: null
    }
    this.handleNewBill = this.handleNewBill.bind(this);
    this.handleDeleteBill = this.handleDeleteBill.bind(this);
  }
  handleNewBill() {
    this.setState({
      bill: {
        progress: "in progress",
        items: {},
        tax: null,
        tip: null,
        total: null,
        split: {}
      }
    })
  }
  handleDeleteBill() {
    this.setState({
      bill: null
    })
  }
  render() {
    return (
      <View style={styles.container}>
        { !this.state.bill ?
          <AddBill newBill={this.handleNewBill}/>
        :
          <Content noBill={this.handleDeleteBill}/>
        }
      </View>
    );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#F5F5F5",
     ...Platform.select({
       ios: { paddingTop: 30 }
     })
   }
})

export default App
