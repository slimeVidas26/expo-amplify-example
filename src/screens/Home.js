import { Auth } from 'aws-amplify';
import React from 'react'
import { StyleSheet, Text, View  , Button} from 'react-native'

export default function Home({updateAuthState}) {

    async function SignOut(){
        try {
          await Auth.signOut() ;
          updateAuthState('loggedOut') 
        } catch (error) {
            console.log('Error signing out: ', error);    
        }
    }
    return (
        <View style = {styles.container}>
            <Text> 💙 + 💛</Text>
            <Button title = "Sign Out" color = "tomato" onPress = {SignOut}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20
    }
  });