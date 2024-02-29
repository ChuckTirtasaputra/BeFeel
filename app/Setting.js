import React from 'react'
import { Link } from 'expo-router'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

const Setting = () => {
    return (
        <View>
            {/*<Link href="/profile">Go to Profile</Link> */}

            <ScrollView style={styles.scrollView}>
            <Link  href="Personal Details?user="
            style = {styles.SettingOpt}>
                Personal Details
            </Link>

            <Pressable onPress={() => alert('Password')}>
                <Text style = {styles.SettingOpt}>
                    Password
                </Text>
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

            <Pressable onPress={() => alert('Log Out')}>
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
      post: {
        fontSize: 25,
        fontWeight: 'normal',
        color: '#fff',
        marginHorizontal: 20,
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
      SettingOpt: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginHorizontal: 20,
        marginTop: 20,
      }
})
