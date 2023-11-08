import React from 'react';
import { Button } from 'react-native';

const GestureButton = ({ gesture, onPress }) => {
  return (
    <Button title={gesture} onPress={onPress} />
  );
};

export default GestureButton;
