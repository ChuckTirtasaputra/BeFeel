import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native'
import AddData from '../src/index';
import Content from '../src/Content';


interface RouterProps {
    navigation: NavigationProp<any, any>
}

const Home = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.scrollView}>
        {/* <Link href="/profile">Go to Profile</Link> */}
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        <Pressable onPress= {() => navigation.navigate('Profile')}>
            <Text style={styles.links}>Profile</Text>
        </Pressable>

        <Pressable onPress= {() => navigation.navigate('Setting')}>
            <Text style={styles.links}>Setting</Text>
        </Pressable> 

        <Pressable onPress= {() => navigation.navigate('My Friends')}>
            <Text style={styles.links}>My Friends</Text>
        </Pressable> 

        </View>
        <View style={styles.separators} />

        {/*input box*/}
        <AddData />

        {/*Posts*/}
        <Content />

        </ScrollView>
    </View>

  );
};

export default Home

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
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
      justifyContent: "space-around",
      backgroundColor: 'pink',
    },
    separators: {
      height: 3,
      backgroundColor: '#000', 
      marginHorizontal: 10,
      marginVertical: 5,
    },
})
