
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class DeleteBill extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.noBill} style={styles.button}>
          <Text style={styles.plus} >x</Text>
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
    borderColor: "#e74c3c"
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


export default DeleteBill;
