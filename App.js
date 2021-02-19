import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import indexScreen from './src/screens/indexScreen';
import {BlogProvider}  from './src/Context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: indexScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);
export default () => {
  return(
    <BlogProvider>
      <App/>
    </BlogProvider>
  );
};

