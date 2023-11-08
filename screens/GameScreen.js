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
  const[clicked, setClicked] = useState(false);


  const playGame = (selectedGesture) => {
    setUserGesture(selectedGesture);
    setComputerGesture(gestures[Math.floor(Math.random() * gestures.length)]);
    
    // const res = determineResult();
    // setResult(res);

    if (userGesture == computerGesture) setResult(0);
    else if (plays[userGesture].includes(computerGesture)) setResult(-1);
    else setResult(1);
    
    console.log(userGesture, computerGesture);
    
  };

  // Compare userGesture and computerGesture and set the result.
  // const determineResult = () => {
  //   if (userGesture == computerGesture) return 0;
  //   else if (plays[userGesture].includes(computerGesture)) return -1;
  //   else return 1;
  // }

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
        {userGesture && computerGesture && result!=null && (
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
        )}
    </View>
  );
};

export default GameScreen;
