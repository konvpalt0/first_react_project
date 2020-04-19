import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div>
                Create Post
            </div>
            <div>
                <Post id="0"/>
                <Post id="1"/>
            </div>
        </div>
    );
};

export default MyPosts;