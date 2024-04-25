import { Link } from 'expo-router'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../FirebaseConfig';

interface RouterProps {
    navigation: NavigationProp<any, any>
}

const Setting = ({ navigation }: RouterProps) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <Pressable onPress= {() => navigation.navigate('Password')}>
            <Text style={styles.SettingOpt}>Password</Text>
            </Pressable>

            <Pressable onPress={() => alert('Notifications')}>
                <Text style = {styles.SettingOpt}>
                    Notifications
                </Text>
            </Pressable>

            <Pressable onPress={() => alert('Privacy')}>
                <Text style = {styles.SettingOpt}>
                    Privacy
                </Text>
            </Pressable>

            <Pressable onPress={() => FIREBASE_AUTH.signOut()}>
                <Text style = {styles.SettingOpt}>
                    Log Out
                </Text>
            </Pressable>

            </ScrollView>
        </View>
    );
};

export default Setting

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'black',
        },
    SettingOpt: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginHorizontal: 20,
        marginTop: 25,
        },
    container: {
        flex: 1,
        backgroundColor: 'black',
        },
})
