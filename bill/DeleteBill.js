
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const DeleteBill = ({styles, noBill}) => (
      <TouchableOpacity onPress={noBill} style={styles.button}>
        <Text style={styles.plus} >x</Text>
      </TouchableOpacity>
)
export default DeleteBill;
