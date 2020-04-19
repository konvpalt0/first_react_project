import React from 'react';
import s from './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div>
                Create Post
            </div>
            <div>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;