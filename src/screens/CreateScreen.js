import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);



    return (
        <View>
            <Text style={styles.label}>
                Enter Title:
            </Text>
            <TextInput
                style={styles.input} 
                value = {title}
                onChangeText = {(text) => setTitle(text)}
            />

            <Text style={styles.label}>
                Enter Content:
            </Text>
            <TextInput 
                style={styles.input}
                value = {content}
                onChangeText = {(text) => setContent(text)}
            />
            <Button 
                title='Add Blogpost'
                onPress = {() => addBlogPost(title, content, () => {
                    navigation.navigate('Index')
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth:1,
        fontSize: 18,
        padding:2,
        borderColor: 'black',
        margin:5
    },
    label: {
        marginBottom: 5,
        fontSize: 20,
        margin: 5
    }
});

export default CreateScreen;