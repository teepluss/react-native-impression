import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Demo extends Component {
  render() {
    return (
      <View style={{flexDirection:'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

module.exports = Demo
