import React from 'react'
import { Link } from 'expo-router'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

const PersonalDetails = () => {
  return (
    <View>
      {/*<Link href="/profile">Go to Profile</Link> */}

      <ScrollView style={styles.scrollView}>

      <Pressable onPress={() => alert('Setting')}>
          <Text style = {styles.SettingOpt}>
              Setting
          </Text>
      </Pressable>


      </ScrollView>
    </View>
  );
};

export default PersonalDetails

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
