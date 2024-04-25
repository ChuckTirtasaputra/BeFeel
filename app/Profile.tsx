import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native'
import Userinfo from '../src/Userinfo';

interface RouterProps {
  navigation: NavigationProp<any, any>
}

const Profile = ({ navigation }: RouterProps) => {
    return (
        <View style={styles.container}>
          <Userinfo />
        </View>
    )
}

export default Profile


const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
      },
})
