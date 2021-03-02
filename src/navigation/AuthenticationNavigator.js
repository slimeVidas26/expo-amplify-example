import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
import ConfirmSignUp from '../screens/ConfirmSignUp'





const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = props => {
  return (
    
      <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="SignIn">
        {screenProps => (
          <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUp}
      />
    </AuthenticationStack.Navigator>
     
    
  );
};

export default AuthenticationNavigator;
