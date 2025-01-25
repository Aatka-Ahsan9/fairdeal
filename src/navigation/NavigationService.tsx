import {createRef} from 'react';
import {
  NavigationContainerRef,
  ParamListBase,
  StackActions,
} from '@react-navigation/native';

// Create a navigation reference
export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

// Navigate function
function navigate(name: string, params?: object) {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

// Go back function
function goBack() {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
}

// Reset function (clears the entire stack and sets the new route)
function reset(name: string, params?: object) {
  if (navigationRef.current) {
    navigationRef.current.reset({
      index: 0,
      routes: [{name, params}],
    });
  }
}

// navigation.dispatch(
//     StackActions.replace('Profile', {
//       user: 'jane',
//     })
//   );

// Pop to the top screen in the current stack
function popToTop() {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.popToTop());
  }
}

// Get current screen route

export default {
  navigate,
  goBack,
  reset,
  popToTop,
};
