import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import {Card} from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require("../back.jpg")} style={styles.image}>
        <Card containerStyle={styles.card}>
          <Button
            title="Piedra, papel, tijeras, lagarto, spock"
            onPress={() => navigation.navigate("Game")}
          />
          <Button
            title="Calculadora IMC"
            onPress={() => navigation.navigate("IMC")}
          />
          <Button
            title="Calculadora Financiera"
            onPress={() => navigation.navigate("Credit")}
          />
        </Card>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    margin: 10,
    marginTop: "50%",
    borderRadius: 10,
    alignContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default HomeScreen;
