/// 2 alerts a day
/// 1st 9am-3pm
/// 2nd from 4pm-10pm

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style = {styles.logo}>BeFeel!</Text>
      <Pressable onPress={() => Alert.alert('LOGIN')}><Text style = {styles.login}>Login</Text></Pressable>
      <Pressable onPress={() => Alert.alert('ALERT USER')}><Text style = {styles.login}>Alert</Text></Pressable>
      <Button 
      title="Login"
      onPress={() => <Link href="sign-in.js"><Text>login</Text></Link>}
      ></Button>

      <Link href="sign-in.js" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 35,
    marginVertical: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#191970',
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
});
