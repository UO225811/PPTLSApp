import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import GestureButton from '../components/GestureButton';
import {Card} from "react-native-elements";

const gestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const plays = 
  {
    rock : [["paper", "spock"], require("../rock.png")],
    paper : [["scissors", "lizard"], require("../paper.png")],
    scissors : [["rock", "spock"], require("../scissors.png")],
    lizard : [["scissors", "rock"], require("../lizard.png")],
    spock : [["paper", "lizard"], require("../spock.png")]
  };

const GameScreen = () => {
  const [userGesture, setUserGesture] = useState(null);
  const [computerGesture, setComputerGesture] = useState(null);
  const [result, setResult] = useState(null);

  const playGame = (selectedGesture) => {
    localRes="", comp=gestures[Math.floor(Math.random() * gestures.length)];
   
    if (selectedGesture == comp) localRes = "It's a draw! 🫣";
    else if (plays[selectedGesture][0].includes(comp)) localRes = "You lost 🥲";
    else localRes = "You won! 🤪";

    setUserGesture(selectedGesture);
    setComputerGesture(comp);
    setResult(localRes);
  };

  return (
    <View>
      <ImageBackground source={require("../back.jpg")} style={styles.image}>
      <Text style={styles.title}>Choose your strategy</Text>
      <Card containerStyle={styles.card}>
        <View style={styles.buttons}>
          {gestures.map((gesture) => (
            <GestureButton
              key={gesture}
              gesture={gesture}
              onPress={() => playGame(gesture)}
              imageUrl={plays[gesture][1]}
            />
          ))}
        </View>
      </Card>
        <View style={styles.result}>
          <Text style={styles.resultText}>You picked {userGesture}</Text>
          <Text style={styles.resultText}>Computer picked {computerGesture}</Text>
          <Text style={styles.resultText}>Result: {result}</Text>
        </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color:'white',
    fontSize: 50,
    textAlign: "center",
    marginTop: "5%",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    margin: 10,
    marginTop: "10%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
  },
  result: {
    margin: '7%',
    backgroundColor: 'white',
  },
  resultText: {
    textAlign: 'center',
    margin: '2%',
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
});

export default GameScreen;
