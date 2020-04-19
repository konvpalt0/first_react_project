import React from 'react';
import s from './Profile.module.css';
import Header from "./Header/Header";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <Header/>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;