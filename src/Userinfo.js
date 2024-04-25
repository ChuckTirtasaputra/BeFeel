import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../FirebaseConfig';
import { ref, onValue } from 'firebase/database';

const Userinfo = () => {
    const [todoData, setTodoData] = useState([])

    useEffect (() => {
        const starCountRef = ref(db, 'userInfo/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newPosts = Object.keys(data).map(key => ({
                id:key,
                ...data[key]
            }));
            console.log(newPosts);
            setTodoData(newPosts);
        });
    }, [])
    return (
        <View>
            {
                todoData.map((item, index) => {
                    return(
                        <View key={index}> 
                            <Text style={styles.header}>Email: {item.email}</Text>
                            <Text style={styles.header}>Username: {item.username}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Userinfo

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 25,
        marginHorizontal: 10,
        color: "white"
    },
});