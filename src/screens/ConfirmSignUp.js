import React , {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../components/AppTextInput'
import {Auth} from 'aws-amplify';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function ConfirmSignUp({navigation}) {
    const [username , setUsername] = useState('')
    const [authCode , setAuthCode] = useState('')

    async function ConfirmSignUp(){
        try {
         await Auth.confirmSignUp(username , authCode)  ;
         console.log('✅ Code confirmed');
         navigation.navigate('SignIn'); 
        } catch (error) {
            console.log(
                '❌ Verification code does not match. Please enter a valid verification code.',
                error.code
              );   
        }
    }
    return (
        <SafeAreaView style = {styles.safeAreaContainer}>
            <View style = {styles.container}>
                <Text>Confirm Sign Up</Text>
                <AppTextInput
                value = {username}
                leftIcon = "account"
                placeholder = "Enter username"
                autoCapitalize = "none"
                keyBoardType = "email-adress"
                textContentType = "emailAdress"
                />
                <AppTextInput
                value = {authCode}
                onChangeText = {text=>setAuthCode(text)}
                leftIcon = "numeric"
                placeholder = "Enter verification code"
                keyBoardType = "numeric"
                />
                <AppButton title = "Confirm Sign Up" onPress = {ConfirmSignUp}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
      },
      container: {
        flex: 1,
        alignItems: 'center'
      },
      title: {
        fontSize: 20,
        color: '#202020',
        fontWeight: '500',
        marginVertical: 15
      }
})
