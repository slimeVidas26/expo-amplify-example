## Building a React Native App with AWS Amplify | Authentication

url : [https://www.instamobile.io/mobile-development/react-native-aws-amplify/]

## github create

git add README.md
git commit -m "first commit"
git remote add origin [https://github.com/slimeVidas26/expo-amplify-example.git]
git push -u origin master

## Create a New AWS IAM User

amplify configure

## Integrating AWS Amplify in React Native

amplify init

npm install aws-amplify aws-amplify-react-native

## integrate Amplify with the Expo app : on app.js

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

## Adding Amplify Authentication Resource

amplify add auth
amplify push

## Building the Registration and Login UI

add withAuthenticator HOC
npm install

## expo start

## Adding a Logout Functionality with AWS Amplify in React Native

## Creating a Custom Authentication Flow with React Navigation Library

expo install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

├──src/
│  └──screens/
│    └── SignIn.js
│    └── SignUp.js
│    └── ConfirmSignUp.js
│    └── Home.js
|  └──components/
│    └── AppButton.js
│    └── AppTextInput.js


## rnfs : react-native-functional-component

 npm install @expo/vector-icons

 ## Creating a Custom Sign In Screen

 ## Making a Custom Sign Up Screen
