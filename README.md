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

