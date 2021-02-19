import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import BlogContext from '../Context/BlogContext';

const indexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);
    return(
        <View>
            <Text>
                index Screen
            </Text>
            <Button title='Add post' onPress={()=>addBlogPost()}/>
            <FlatList
            data={data}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item})=>{
                return(
                    <Text>
                        {item.title}
                    </Text>
                );
            }}
            />
        </View>
    );
};

const style = StyleSheet.create({});

export default indexScreen;