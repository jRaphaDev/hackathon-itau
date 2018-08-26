import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Portifolio from './components/Portifolio';
import Login from './components/Login';

const App = createStackNavigator({
  Login: { screen: Login },
  Portifolio: { screen: Portifolio },
})

export default App;