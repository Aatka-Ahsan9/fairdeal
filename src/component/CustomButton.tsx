import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {palette} from '../constants/colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
}

const CustomButton = ({
  title,
  onPress,
  backgroundColor = palette.blue,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, {backgroundColor: backgroundColor}]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: palette.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
