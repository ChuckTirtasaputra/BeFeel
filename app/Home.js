import React from 'react'
import { Link } from 'expo-router'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

const home = () => {
  return (
    <View>
        {/*<Link href="/profile">Go to Profile</Link> */}

        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        <Link href={{
            pathname: "/Profile",
            params: { name: "Chuck" },
        }}
        style={styles.links}>
            Profile
        </Link>

        <Link  href="/Setting?user=" 
        style={styles.links}>
            Setting
        </Link>

        <Link  href="/My Friends?user=" 
        style={styles.links}>
            Friends
        </Link>

        </View>

        <Text style={styles.post}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </ScrollView>
    </View>
  );
};

export default home

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
        marginVertical: 20,
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
})
