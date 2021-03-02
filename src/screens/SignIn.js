import React , {useState} from 'react'
import { StyleSheet, Text, View  , TouchableOpacity} from 'react-native'
import {safeAreaView} from 'react-native-safe-area-context'

import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { Auth } from 'aws-amplify'

export default function SignIn() {

    const [userName , setUsername] = useState('');
    const [password , setPassword] = useState('');

    async function Signin(){
        try {
            await Auth.signIn(userName , password);
            console.log('✅ Success');
            updateAuthState('loggedIn');    
        } catch (error) {
            console.log('❌ Error signing in...', error);   
        }
        
    }

    return (
        <safeAreaView style = {styles.safeAreaContainer}>

        <View style = {styles.container}>
            <Text style = {styles.title}>Sign in to your account</Text>
            <AppTextInput
            value = {username}
            onChangeText = {text => setUsername(text)}
            leftIcon = "account"
            placeholder = "Enter username"
            autoCapitalize = "none"
            keyboardType = "emailAdress"
            textContentType = "emailAdress"
            />
            <AppTextInput
            value = {password}
            onChangeText = {text=>setPassword(text)}
            leftIcon = "lock"
            placeholder = "Enter password"
            autoCapitalize = "none"
            autoCorrect = {false}
            secureTextEntry
            textContentType = "password"
            />
            <AppButton title = "Login" onPress = {SignIn} />
            <View style = {styles.footerButtonContainer}>
                <TouchableOpacity onPress = {()=>NavigationPreloadManager.navigate('SignUp')}>
                    <Text style = {styles.forgotPasswordButtonText}>
                    Don't have an account? Sign Up
                    </Text>

                </TouchableOpacity>

            </View>
        </View>
        </safeAreaView>
        
    )
}

const styles = StyleSheet.create({})
