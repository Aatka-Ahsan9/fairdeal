import {View, StyleSheet, Alert, Text} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../component/CustomTextInput';
import CustomButton from '../../component/CustomButton';
import {palette} from '../../constants/colors';
import {isValidEmail} from '../../utility/utils';
import NavigationService from '../../navigation/NavigationService';
import {useDispatch} from 'react-redux';
import {isLogin} from '../../store/slices/AuthSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email !== '' && password !== '') {
      if (!isValidEmail(email)) {
        Alert.alert('Please enter a valid email');
        return;
      }
      if (password.length < 8) {
        Alert.alert('Password must be at least 8 characters');
        return;
      }
      dispatch(isLogin());
      NavigationService.reset('Home');
      return;
    } else {
      Alert.alert('Please enter email and password');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.secondary,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
