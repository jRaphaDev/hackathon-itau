import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Portifolio from './components/Portifolio';
import Login from './components/Login';

const App = createStackNavigator({
  Login: { screen: Login },
  Portifolio: { screen: Portifolio },
}, {
  headerMode: 'none'
})

export default App;