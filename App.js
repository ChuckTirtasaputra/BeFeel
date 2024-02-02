import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
      style = {styles.logo}>BeFeel!</Text>
      <Pressable style = {styles.login}
      onPress={() => alert('LOGIN')}>Login</Pressable>
      <Button 
      title="Login"
      style = {styles.login}
      onPress={() => Alert.alert('LOGIN')}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 35,
    borderRadius: 4,
    fontSize: "1.52em",
    elevation: 3,
    backgroundColor: '#191970',
    color: "#fff",
  },
  logo: {
    fontSize: "2.52rem",
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 100
  },
});