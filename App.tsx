import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/Login';
import Home from './app/Home';
import Profile from './app/Profile';
import Setting from './app/Setting';
import My_Friends from './app/My Friends';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import React from 'react';

const Stack = createNativeStackNavigator()

const InsideStack = createNativeStackNavigator()

function InsideLayout()  {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name= "Home" component={Home}/>
      <InsideStack.Screen name= "Profile" component={Profile}/>
      <InsideStack.Screen name= "Setting" component={Setting}/>
      <InsideStack.Screen name= "My Friends" component={My_Friends}/>
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null); 

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    })
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false}} />
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
