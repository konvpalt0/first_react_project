import React from 'react';
import s from './Post.module.css';

let MessageData = [
    {id:"0", message:"Post1111"},
    {id:"1", message:"Post22"},
];

const Post = (props) => {
    return (
        <div className={s.item}>
            {MessageData[props.id].message}
        </div>
    );
};

export default Post;