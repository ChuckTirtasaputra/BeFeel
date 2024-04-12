import { Link } from 'expo-router'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../FirebaseConfig';

interface RouterProps {
  navigation: NavigationProp<any, any>
}

const Profile = ({ navigation }: RouterProps) => {
    return (
        <View>
        <Link  href="/Login" 
        style={styles.links}>
            Login
        </Link>
        </View>
    )
}

export default Profile


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
      },
      post: {
        fontSize: 25,
        fontWeight: 'normal',
        color: '#000',
        marginHorizontal: 20,
      },
      links: {
        fontSize: 20,
        fontWeight: '700',
        color: '#23679e',
        padding: 10,
      },
      container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around"
      },
      separators: {
        height: 3,
        backgroundColor: '#000', 
        marginHorizontal: 10,
        marginVertical: 5.
      },
})
