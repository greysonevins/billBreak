import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

const BillItem = ({styles}) => (
   <View style={styles.container}>
      <Text style={styles.itemInfo}>Item Type</Text>
      <TextInput
        style={styles.input}
        keyboardType = 'numeric'
        placeholder="$0.00"/>
    </View>
)
export default BillItem;
