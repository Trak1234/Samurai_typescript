import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import { PostType } from '../../redux/state';




type MyPostType = {
    posts:Array<PostType>
    addPost:() => void
    updateNewPostText:(newText:string) => void
    newPostText:string
}


const MyPosts = (props:MyPostType) => {


    let newPostElement = React.createRef<HTMLTextAreaElement>();

   

    let onPostChange = () => {
        if(newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }
  

    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;