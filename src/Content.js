import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../FirebaseConfig';
import { ref, onValue } from 'firebase/database';

const Content = () => {
    const [todoData, setTodoData] = useState([])

    useEffect (() => {
        const starCountRef = ref(db, 'posts/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newPosts = Object.keys(data).map(key => ({
                id:key,
                ...data[key]
            }));
            setTodoData(newPosts);
        });
    }, [])
    return (
        <View>
            {
                todoData.map((item, index) => {
                    return(
                        <View key={index}> 
                            <Text style={styles.header}>Mood: {item.title}</Text>
                            <Text style={styles.text}>{item.body}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    header: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 5,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#000',
        marginHorizontal: 20,
      },
});
