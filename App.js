import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { WebView } from 'react-native';

export default class Screen1 extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://jeevangyawali.com.np/'}}
        style={{marginTop: 20}}
      />
    );
  }
}
