import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPost/MyPost';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType } from '../redux/state';


type PostsProp = {
    profilePage:Array<PostType>
    addPost:() => void
    updateNewPostText:(newText:string) => void
    newPostText:string
}

const Profile = (props:PostsProp) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}
                    />
        </div>
    )
}

export default Profile;

/* newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost} */