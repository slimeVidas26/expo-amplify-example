import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'


const AppStack = createStackNavigator();

const AppNavigator = props => {
  return (
     
       <AppStack.Navigator>
      <AppStack.Screen name="Home">
        {screenProps => (
          <Home {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AppStack.Screen>
    </AppStack.Navigator>  
      
   
  );
};

export default AppNavigator;