import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Alert, Pressable } from 'react-native';

const home = () => {
    return (
        <View>
            {/*<Link href="/profile">Go to Profile</Link> */}

            <Link  href="/Profile?user=">profile</Link>

            <Link href={{
                pathname: "/Profile",
                params: { name: "Chuck" },
            }}
            >Go to the Profile</Link>

<Pressable onPress={() => alert('PERM')}><Text style = {styles.login}>PERM</Text></Pressable>
        </View>
    );
};

export default home

const styles = StyleSheet.create({})