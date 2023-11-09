import React from 'react';
import {TouchableOpacity, Image, StyleSheet } from 'react-native';

const GestureButton = ({ gesture, onPress, imageUrl }) => {
  return (
    <TouchableOpacity onPress={onPress} gesture={gesture}>
      <Image style={styles.image} source={imageUrl} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 68,
    height: 68,
    margin: "1%"
  }
});

export default GestureButton;
