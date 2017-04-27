import React, { Component } from 'react';
import DeleteBill from './DeleteBill'
import BillItem from './BillItem'
import AddItems from './AddItems'


import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Content extends Component {
  render() {
    return (
      <View>
          <View style={styles.container}>
            <DeleteBill styles={styles} noBill={this.props.noBill}/>
          </View>
          <View>
            <BillItem styles={styles}/>
          </View>
          <View>
            {/* <AddItems styles={styles} addItem={null} /> */}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  input: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "row",
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: '#95a5a6',
    marginTop: 70,
    height: 20
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#e74c3c"
  },
  addItem: {
  },
  add: {
  },
  itemInfo: {
    marginLeft: 40,
    marginTop: 70,
    flex: 1,
    height: 20
  },
  plus: {
    fontSize: 25,
    color: "#95a5a6",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  }
});

export default Content;
