import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Context} from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const {state:state} = useContext(Context);
    const blogPost = state.find(
        post => post.id === navigation.getParam('id')
    );

    return (
        <Text>
            {blogPost.title}
        </Text>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
};

const styles = StyleSheet.create({});

export default ShowScreen;