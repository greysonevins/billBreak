
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class AddBill extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.newBill} style={styles.button}>
          <Text style={styles.plus} >+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#2980b9"
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


export default AddBill;
