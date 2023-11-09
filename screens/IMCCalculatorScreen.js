import React from "react";
import { View, Text, Button, StyleSheet, TextInput, ImageBackground } from "react-native";
import { useState } from "react";

const IMCCalculatorScreen = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imcResult, setImcResult] = useState('');
    const [response, setResponse] = useState('');

    const calculateIMC = () => {
        const imc = (weight / (height/100 * height/100)).toFixed(2);

        setImcResult(`Tu índice de masa corporal es: ${imc}`);

        if (imc < 18.5) {
            setResponse('Estás muy delgad@');
        } else if (imc >= 18.5 && imc <= 25){
            setResponse('Estás en tu peso ideal');
        } else {
            setResponse('Tienes sobrepeso');
        }
    }

    return (
      <ImageBackground source={require("../burger.jpg")} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.textCalc}>Altura(cm)</Text>
            <TextInput
              style={styles.textCalc}
              keyboardType="numeric"
              onChangeText={(text) => setHeight(text)}
              value={height}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.textCalc}>Peso(kg)</Text>
            <TextInput
              style={styles.textCalc}
              keyboardType="numeric"
              onChangeText={(text) => setWeight(text)}
              value={weight}
            />
          </View>
          <Button title="Calcular IMC" onPress={calculateIMC} />
          <Text style={styles.textCalc}>{imcResult}</Text>
          <Text style={styles.textCalc}>{response}</Text>
        </View>
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: '18%'
    },
    textCalc: {
        color: '#FFFF00',
        fontSize: 25,
        textAlign: 'center',
        marginTop: '7%',
        backgroundColor: 111,
        fontWeight: "bold"
    }
});

export default IMCCalculatorScreen;