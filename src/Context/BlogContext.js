import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add-blogpost':
            return [...state, {title: `Blogpost #${state.length+1}`}];
        default:
            return state;
    }
};

export const BlogProvider = ({children}) => {

    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    
    const addBlogPost = () => {
        dispatch({type: 'add-blogpost'});
    };

    return (
        <BlogContext.Provider
        value={{data: blogPosts, addBlogPost}}
        >
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;