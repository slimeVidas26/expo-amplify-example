import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View  , Button} from 'react-native';
import { withAuthenticator} from 'aws-amplify-react-native';


import Amplify , {Auth} from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);


function App() {

  async function signOut(){
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);   
    }
  }
  return (
     <View style={styles.container}>
      <Text>💙 + 💛 = React Native + Amplify </Text>
      <Button title="Sign Out" color="tomato" onPress={signOut} />
      <StatusBar style="auto" />
    </View>
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