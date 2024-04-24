import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import AddData from '../../src';


export default function App() {
    return(
        <View style ={styles.container}>
            <AddData />
        </View>
    )
}

interface RouterProps {
    navigation:NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Button onPress={() => navigation.navigate('details')} title="Open Details" />
            <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
        </View>
    );
};

//export default List;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex: 1,
        justifyContent:'center'
    },
});
