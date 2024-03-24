import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import Profile from './components/Profile/Profile';
import Dialog from "./components/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import store, { StoreType } from './components/redux/state';

type PropsType = { 
    store: StoreType
}


const App = (props:PropsType) => {
    let state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    
                        <Route path='/dialogs' render={()=><Dialog state={state.dialogsPage}/>}/> {/*/dialogs/spam/blabla*/}
                        <Route path='/profile' render={()=><Profile profilePage={state.profilePage.posts}
                                                                    addPost={store.addPost.bind(props.store)}
                                                                    updateNewPostText={store.updateNewPostText.bind(props.store)}
                                                                    newPostText={state.profilePage.newPostText}
                               /* addPost={addPost}
                               updateNewPostText={updateNewPostText} */   />}  />
                    
                    
                </div>
            </div>
        </BrowserRouter>)
}

export default App;