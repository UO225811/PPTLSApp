import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen },
});

export default createAppContainer(AppNavigator);