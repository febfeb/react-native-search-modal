/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SearchDialog from './src/components/SearchDialog';

export default class App extends Component {
  render() {
    return (
      <SearchDialog />
    );
  }
}

AppRegistry.registerComponent('SearchDialog', () => App);
