# BeFeel

Getting the environment working
1. Download 'Expo Go' on your phone (login)
2. Follow the manual installation from https://docs.expo.dev/router/installation/#quick-start or do the following:
4. Run 'npx create-expo-app' in the terminal of your complier (I use VSCode)
5. Then run 'cd ./{insert filename}'
6. Then run 'npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar firebase'
7. Then run 'npm install @react-navigation/native @react-navigation/native-stack'

Getting Firebase Up 
1. Go to https://console.firebase.google.com/
2. Start a project
3. Click on Web App and Name the app
4. Then copy the npm code from
   'const firebaseConfig = {
   ...
   ...
   ...
   appID: "..."
   };'
5. Click on 'Build' (from the left hand side)
6. Click on 'Authentication', 'Get Started'
7. Under the 'Sign-in method' click 'Email/Password'

Pushing Data into firebase from the app:
1. To push data we created a separate folder in the same directory called src, where we are going to have our files that connect to the firebase.
2. In this folder you are going to create a file in our case index.tsx where its going to take an input from the user and store it in a realtime database in firebase. 
3. To allow this in firebase, you need to go realtime database and in the rules tabs, you need to change the value of ".write":false to true.
 

Files to download
  app folder
  'FirebaseConfig.ts' (edit the 'const firebaseConfig' funtion to the copied code from Firebase)
  'metro.config.js'
  'tsconfig.json'
  'App.tsx'

12. Run 'npx expo start' in the terminal 
13. This should run a mini server that allows you to see the app from the web or from your phone
14. It should give you a QR code that you should scan and it will take you to Expo Go
15. You click on the project and you should be able to see the app

Working with screens
1. If you want to make changes, edit the files in the 'app' folder
2. Make new screens by making new tsx files in the 'app' folder
3. Go to the new screens by navigating through them (dont forget to initialize the screens in the app.tsx)
