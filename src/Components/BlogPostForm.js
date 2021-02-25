import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


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
                title='Save Blogpost'  
                onPress={()=> onSubmit(title, content)}
            />

        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm;