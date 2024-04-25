import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { db } from '../FirebaseConfig';
import { ref, set } from 'firebase/database';

const AddData: React.FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    //function to add data to firebase realtime db
    const dataAddOn = () => {
        set(ref(db, 'posts/' + title), {
            title: title,
            body: body,
        });
        setTitle('');
        setBody('');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Post Your Mood</Text>
            <TextInput
                placeholder='Title'
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Body'
                value={body}
                onChangeText={(text) => setBody(text)}
                style={styles.input}
            />
            <Button title='New Post' onPress={dataAddOn} />
        </View>
    );
};

export default AddData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
});
