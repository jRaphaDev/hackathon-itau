import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Portifolio from './components/Portifolio';
import Login from './components/Login';
import Produto from './components/Produto';

const App = createStackNavigator({
  Login: { screen: Login },
  Portifolio: { screen: Portifolio },
  Produto: { screen: Produto }
}, {
  headerMode: 'none'
})

export default App;