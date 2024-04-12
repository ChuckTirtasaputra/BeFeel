/*
Notes:
- 2 alerts a day
- 1st 9am-3pm
- 2nd from 4pm-10pm

1. Database integrated
2. Alerts 
3. Login 
*/

import { StyleSheet, Text, View, Pressable, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 

const cityRef = doc(FIREBASE_DB, 'cities', 'BJ');
setDoc(cityRef, { capital: true }, { merge: true });

const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
      setLoading(true);
      try {
          const response = await signInWithEmailAndPassword(auth, email, password);
          console.log('response: ', response);
      }   catch (error: any) {
          console.log(error);
          alert('Sign in failed: ' + error.message);
      }   finally {
          setLoading(false);
      }
  }

  const signUp = async () => {
      setLoading(true);
      try {
          const response = await createUserWithEmailAndPassword(auth, email, password);
          console.log(response);
          alert('Check your emails!');
      }   catch (error: any) {
          console.log(error);
          alert('Sign in failed: ' + error.message);
      }   finally {
          setLoading(false);
      }
  }

  return(
      <View style= {styles.container}>
          <KeyboardAvoidingView behavior="padding">
              <Text style = {styles.logo}>BeFeel!</Text>

              <TextInput value={email} style= {styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
              <TextInput secureTextEntry={true} value={password} style= {styles.input} placeholder="Password" autoCapitalize="none"  onChangeText={(text) => setPassword(text)}></TextInput>
          
              {loading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                  <>
                      <Pressable onPress={signIn}>
                      <Text style = {styles.login}>
                        Login
                      </Text>
                      </Pressable>

                      <Pressable onPress={signUp}>
                      <Text style = {styles.login}>
                        Create Account
                      </Text>
                      </Pressable>
                  </>
              )}     
          </KeyboardAvoidingView>   
      </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    login: {
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 35,
      marginVertical: 40,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#191970',
      fontWeight: "500",
      color: "#fff",
    },
    logo: {
      fontSize: 50,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#fff',
    },
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      padding: 100
    },
    input: {
        marginVertical: 10,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding:10,
        backgroundColor: '#fff'
    },
  });
