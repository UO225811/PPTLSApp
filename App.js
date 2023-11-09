import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import IMCCalculatorScreen from './screens/IMCCalculatorScreen';
import CreditCalculatorScreen from './screens/CreditCalculatorScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen },
  IMC: { screen: IMCCalculatorScreen },
  Credit: { screen: CreditCalculatorScreen }
});

export default createAppContainer(AppNavigator);