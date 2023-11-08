import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import GestureButton from '../components/GestureButton';

const gestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const plays = 
  {
    rock : ["paper", "spock"],
    paper : ["scissors", "lizard"],
    scissors : ["rock", "spock"],
    lizard : ["scissors", "rock"],
    spock : ["paper", "lizard"]
  };

const GameScreen = () => {
  const [userGesture, setUserGesture] = useState(null);
  const [computerGesture, setComputerGesture] = useState(null);
  const [result, setResult] = useState(null);

  const playGame = (selectedGesture) => {
    localRes=0, comp=gestures[Math.floor(Math.random() * gestures.length)];
   
    if (selectedGesture == comp) localRes = 0;
    else if (plays[selectedGesture].includes(comp)) localRes = -1;
    else localRes = 1;

    setUserGesture(selectedGesture);
    setComputerGesture(comp);
    setResult(localRes);
  };

  return (
    <View>
        <Text>Choose your strategy</Text>
        <View>
          {gestures.map((gesture) => (
            <GestureButton
              key={gesture}
              gesture={gesture}
              onPress={() => playGame(gesture)}
            />
          ))}
        </View>
          <View>
            <Text>
              You picked {userGesture}
            </Text>
            <Text>
              Computer picked {computerGesture}
            </Text>
            <Text>
              Result: {result}
            </Text>
          </View>
    </View>
  );
};

export default GameScreen;
