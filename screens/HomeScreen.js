import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import {Card} from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require("../back.jpg")} style={styles.image}>
        <Text style={styles.principal}>Menú principal</Text>
        <Card containerStyle={styles.card}>
          <View style={styles.margins}>
            <Button
              title="Piedra, papel, tijeras, lagarto, spock"
              onPress={() => navigation.navigate("Game")}
            />
          </View>
          <View style={styles.margins}>
            <Button
              title="Calculadora IMC"
              onPress={() => navigation.navigate("IMC")}
            />
          </View>
          <View style={styles.margins}>
            <Button
              title="Calculadora Financiera"
              onPress={() => navigation.navigate("Credit")}
            />
          </View>
        </Card>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  principal:{
    backgroundColor: 'black',
    color:'white',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '25%'
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    margin: 10,
    marginTop: "20%",
    borderRadius: 10,
    alignContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  margins:{
    margin:20
  }
});

export default HomeScreen;
