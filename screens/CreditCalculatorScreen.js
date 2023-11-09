import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import {Card} from "react-native-elements";
import Slider from '@react-native-community/slider';

const CreditCalculatorScreen = () => {
  const [creditAmount, setCreditAmount] = useState(1000);
  const [numberOfInstallments, setNumberOfInstallments] = useState(12);
  const interestRate = 0.9798;

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment =
      (creditAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfInstallments));
    return monthlyPayment.toFixed(2);
  };

  const handleGrantCredit = () => {
    console.log(
      `Crédito concedido. Cuota mensual: $${calculateMonthlyPayment()}`
    );
  };

  const handleCreditDetails = () => {
    console.log(
      `Detalles del crédito - Cantidad total: $${creditAmount}, Plazos: ${numberOfInstallments}`
    );
  };

  return (
    <ImageBackground source={require("../stonks.jpg")} style={styles.image}>
      <View style={styles.main}>
        <Card containerStyle={styles.card}>
          <Text style={styles.container}>Simulador de Crédito</Text>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.centered}>
              Cantidad del Crédito: ${creditAmount}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={1000}
              maximumValue={30000}
              step={500}
              value={creditAmount}
              onValueChange={(value) => setCreditAmount(value)}
              minimumTrackTintColor="orange"
              thumbTintColor="steelblue"
              maximumTrackTintColor="steelblue"
            />
          </View>
          <View>
            <Text style={styles.centered}>
              Número de Plazos: {numberOfInstallments}
            </Text>
            <Slider
              style={styles.sliders}
              minimumValue={3}
              maximumValue={36}
              step={3}
              value={numberOfInstallments}
              onValueChange={(value) => setNumberOfInstallments(value)}
              minimumTrackTintColor="orange"
              thumbTintColor="steelblue"
              maximumTrackTintColor="steelblue"
            />
          </View>
          <Text style={styles.centered}>
            Cuota Mensual: ${calculateMonthlyPayment()}
          </Text>
          <View style={styles.margins}>
            <Button
              style={styles.buttonStyles}
              title="Obtener Crédito"
              onPress={handleGrantCredit}
            />
          </View>
          <View style={styles.margins}>
            <Button
              title="Detalles del Crédito"
              onPress={handleCreditDetails}
            />
          </View>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main:{
    marginTop: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:30,
    textAlign: 'center'
  },
  sliders:{
    marginVertical: 20,
    fontSize:30,
    textAlign: 'center'
  },
  image: {
      flex: 1,
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        margin: 10,
        marginTop: '25%',
        borderRadius: 10,
        alignContent: 'center',
    },
    centered:{
        textAlign:'center',
        fontSize:20
    },
    buttonStyles: {
        marginTop: 5
    },
    margins:{
      marginTop: 20,
      marginBottom: 5
    }
});

export default CreditCalculatorScreen;
