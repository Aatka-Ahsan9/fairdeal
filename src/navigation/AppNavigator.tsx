import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import HomePage from '../screens/home/HomePage';
import {navigationRef} from './NavigationService';
import {useSelector} from 'react-redux';
// Placeholder Screens

// Stack Navigator
const Stack = createStackNavigator();
const LoginStack = () => {
  const {isLoggedIn} = useSelector((state: any) => state.auth);
  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? 'Home' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <LoginStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
