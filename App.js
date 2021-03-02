import React , {useState , useEffect} from 'react';
import { View , ActivityIndicator} from 'react-native';
import { withAuthenticator} from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native'


import AppNavigatorStack from './src/navigation/AppNavigatorStack'
import AuthenticationNavigatorStack from './src/navigation/AuthenticationNavigatorStack'



import Amplify , {Auth} from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);



function App() {

  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

  const Initializing = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  };

  useEffect(() => {
    checkAuthState();
  }, []);


  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log('✅ User is signed in');
      setUserLoggedIn('loggedIn');
    } catch (err) {
      console.log('❌ User is not signed in');
      setUserLoggedIn('loggedOut');
    }
  }

  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }
  

  async function signOut(){
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);   
    }
  }


  return (

     <NavigationContainer>
        {isUserLoggedIn === 'initializing' && <Initializing />}
        {isUserLoggedIn === 'loggedIn' && (
          <AppNavigatorStack updateAuthState={updateAuthState} />
        )}
        {isUserLoggedIn === 'loggedOut' && (
          <AuthenticationNavigatorStack updateAuthState={updateAuthState} />
        )}
      </NavigationContainer>
   
  );
}




export default withAuthenticator(App);