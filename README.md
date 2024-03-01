# BeFeel

Getting the environment working
1. Download 'Expo Go' on your phone (login)
2. Follow the manual installation from https://docs.expo.dev/router/installation/#quick-start or do the following:
4. Run 'npx create-expo-app' in the terminal of your complier (I use VSCode)
5. Then run 'npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar'
6. Create a folder within your project named 'app'
7. Download all the files in github and put all of the javascript files in the 'app' folder except for 'babel.config.js' and replace all of the other files that were automatically created
8. Run 'npx expo start' in the terminal 
9. This should run a mini server that allows you to see the app from the web or from your phone
10. It should give you a QR code that you should scan and it will take you to Expo Go
11. You click on the project and you should be able to see the app

Working with screens
1. If you want to make changes, edit the files in the 'app' folder
2. Make new screens by making new js files in the 'app' folder
3. Go to the new screens by linking them (refer to the stuff in the files already for an example)
