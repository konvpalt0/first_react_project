import React from 'react';
import s from './Profile.module.css';
import Header from "./Header/Header";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <Header/>
            <MyPosts/>
        </div>
    );
}

export default Profile;