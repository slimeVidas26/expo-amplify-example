import React from 'react';
import { StyleSheet, Text, View  , Button} from 'react-native';
import { withAuthenticator} from 'aws-amplify-react-native';
import { NavigationContainer } from '@react-navigation/native'


import AppNavigatorStack from './navigation/AppNavigatorStack'
import AuthenticationNavigatorStack from './navigation/AuthenticationNavigatorStack'



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
          <AppNavigator updateAuthState={updateAuthState} />
        )}
        {isUserLoggedIn === 'loggedOut' && (
          <AuthenticationNavigator updateAuthState={updateAuthState} />
        )}
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default withAuthenticator(App);