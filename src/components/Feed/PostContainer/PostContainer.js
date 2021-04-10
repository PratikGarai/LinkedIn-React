import { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import PostOption from './PostOption/PostOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import {db} from '../../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';

import './PostContainer.css'

const PostContainer = () => {
    const user = useSelector(state => state.user.currentUser);
    const [message, setMessage] = useState("");

    const sendPost = (e) => {
        e.preventDefault();

        if(message==="")
            return ;

        let description = user.description?user.description:"LinkedIn User"

        db
            .collection('posts')
            .add({
                name : user.displayName,
                description : description,
                message : message,
                imageUrl : user.photoUrl,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            });
        
            setMessage("");
    }

    return (
        <div className="post__container">
            <div className="post__input">
                <CreateIcon />
                <form onSubmit={sendPost}>
                    <input type="text" value={message} onChange={(e)=> {setMessage(e.target.value)}} />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="post__options">
                <PostOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <PostOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                <PostOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <PostOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
            </div>
        </div>
    );
}

export default PostContainer;