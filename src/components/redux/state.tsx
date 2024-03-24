import { renderTree } from "../.."

export type MessageType = {
    id: number  
    message:string
}

export type DialogType= {
    id:number
    name:string
}

export type PostType = {
    id:number
    message:string
    likesCount:number

}

export type ProfilePageType={
    posts:Array<PostType>
    newPostText: string
}


export type DialogPageType={
    dialogs:Array<DialogType>
    messages:Array<MessageType>
}

/* export type SideBarType = {} */


export type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
   
}


export type StoreType = {
    _state:RootStateType
    addPost:() => void
    updateNewPostText:(newText:string) => void
    getState:() =>RootStateType
    _onChange:() => void
    subscribe:(callback: () => void) => void
}


const store:StoreType ={
    _state:{
        profilePage:{
            posts:[
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage:{
            dialogs:[
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages:[
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            
        }
},
    getState(){return this._state},
    addPost(){
        let newPost= {
            id:5,
            message: this._state.profilePage.newPostText,
            likesCount:0 
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText ='';
        renderTree()
    },
    updateNewPostText(newText:string){
        this._state.profilePage.newPostText = newText;
        renderTree()
        
    },
    _onChange(){console.log('state change')
    },
    subscribe(callback){
        this._onChange = callback
    }
}
    
    


export default store;

