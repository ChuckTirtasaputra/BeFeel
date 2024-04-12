import { Link } from 'expo-router'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../FirebaseConfig';

interface RouterProps {
  navigation: NavigationProp<any, any>
}

const My_Friends = ({ navigation }: RouterProps) => {
    return (
        <View>
            {/*<Link href="/profile">Go to Profile</Link> */}

            <ScrollView style={styles.scrollView}>
            <Pressable onPress={() => alert('Friend1')}>
                <Text style = {styles.Friends}>
                Friend1
                </Text>
            </Pressable>

            <Pressable onPress={() => alert('Friend2')}>
                <Text style = {styles.Friends}>
                Friend2
                </Text>
            </Pressable>

            <Pressable onPress={() => alert('Friend3')}>
                <Text style = {styles.Friends}>
                Friend3
                </Text>
            </Pressable>

            <Pressable onPress={() => alert('Friend4')}>
                <Text style = {styles.Friends}>
                Friend4
                </Text>
            </Pressable>

    
            </ScrollView>
        </View>
    );
};

export default My_Friends

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'black',
      },
      links: {
        fontSize: 20,
        fontWeight: '700',
        color: '#191970',
        padding: 10,
      },
      container: {
        display: 'flex',
        flexDirection: 'row',
      },
      Friends: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginHorizontal: 20,
        marginTop: 20,
      }
})
