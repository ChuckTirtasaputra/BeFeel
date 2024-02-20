import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const home = () => {
    return (
        <View>
            {/*<Link href="/profile">Go to Profile</Link> */}

            <Link  href="/login">login</Link>
            <Link  href="/Profile?user=">profile</Link>

            <Link href={{
                pathname: "/Profile",
                params: { name: "Chuck" },
            }}
            >Go to the Profile</Link>
        </View>
    );
};

export default home

const styles = StyleSheet.create({})