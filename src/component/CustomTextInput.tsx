import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {palette} from '../constants/colors';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
}: CustomTextInputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    height: 50,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 5,
    padding: 10,
    marginVertical: 20,
  },
});
