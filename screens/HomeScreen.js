import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Play" onPress={() => navigation.navigate("Game")} />
    </View>
  );
};

export default HomeScreen;
