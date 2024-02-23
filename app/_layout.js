/// 2 alerts a day
/// 1st 9am-3pm
/// 2nd from 4pm-10pm

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Stack } from 'expo-router';

let perm = 0
export default function Layout() {
    if (perm == 1) {
        return(
      <View style={styles.container}>
      <Text style = {styles.logo}>BeFeel!</Text>
      <Pressable onPress={() => alert('LOGIN')}><Text style = {styles.login}>Login</Text></Pressable>
      <Pressable onPress={() => alert('ALERT USER')}><Text style = {styles.login}>Alert</Text></Pressable>
 
      <StatusBar style="auto" />
    </View>
    )
    } else {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#000",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }}
    >
        <Stack.Screen name="Home"/>

        <Stack.Screen name="Profile"/>
        <Stack.Screen name="index"/>
        <Stack.Screen name="Setting"/>
        <Stack.Screen name="My Friends"/>
    </Stack>
    )
}
}

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
  });
