import { Auth } from 'aws-amplify'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'

export default function SignUp({navigation}) {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('');

    async function SignUp(){
        try {
            await Auth.signUp({username , password , attributes :{email}})
            console.log('✅ Sign-up Confirmed');
            nanigation.navigate('ConfirmSetup')
            
        } catch (error) {
            console.log('❌ Error signing up...', error);   
        }
    }
    return (
        <SafeAreaView style = {styles.safeAreaContainer}>
            <View style = {styles.container}>
                <Text style = {styles.title}>Create a new account</Text>
                <AppTextInput
                value = {username}
                onChangeText = {text=>setUsername(text)}
                leftIcon = "account"
                placeholder = "Enter username"
                autoCapitalize = "none"
                keyBoardType = "email-adress"
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
                <AppTextInput
                value = {email}
                onChangeText = {text=>setEmail(text)}
                leftIcon = "email"
                autoCapitalize = "none"
                keyBoardType = "email-adress"
                textContentType = "emailAdress"
                />
                <AppButton title ="Sign Up" onPress = {SignUp}/>
                <View style = {styles.footerButtonContainer}>
                    <TouchableOpacity onPress = {()=>navigation.navigate('SignIn')}>
                        <text style = {styles.forgotPasswordButtonText}>
                        Already have an account? Sign In
                        </text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
           
    
    );
}

const styles = StyleSheet.create({
    safeAreaContainer : {
        flex : 1,
        backgroundColor : 'white'
    },
    container : {
        flex :1,
        alignItems:'center'

    },
    title : {
        fontSize:20,
        color : '#202020',
        fontWeight: '500',
        marginVertical : 15
    },
    footerButtonContainer :{
        marginVertical:15,
        justifyContent : 'center',
        alignItems : 'center'
    },
    forgotPasswordButtonText : {
        color : 'tomato',
        fontSize : 18,
        fontWeight : '600'
    }
})
