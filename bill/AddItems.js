import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const AddItems = ({styles, addItem}) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={addItem} style={styles.addItem}>
        <Text style={styles.add} >+ Item</Text>
      </TouchableOpacity>
    </View>
)
export default AddItems;
