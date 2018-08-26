import React from 'react';

import { createStackNavigator } from 'react-navigation';
import Portifolio from './components/Portifolio';
import Login from './components/Login';
import Produto from './components/Produto';
import Food from './components/Food';
import Ingrediente from './components/Ingrediente';
import Calculadora from './components/Calculadora';


const App = createStackNavigator({
 Login: { screen: Login },
 Portifolio: { screen: Portifolio },
 Produto: { screen: Produto },
 Food: {screen: Food},
 Ingrediente: { screen: Ingrediente},
 Calculadora: { screen: Calculadora}
}, {
 headerMode: 'none'
})


export default App;