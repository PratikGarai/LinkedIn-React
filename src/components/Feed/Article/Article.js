import { Avatar } from '@material-ui/core';
import PostOption from '../PostContainer/PostOption/PostOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import './Article.css';

const Article = ({name, description, message, photoUrl}) => {
    return (
        <div className="article">
            <div className="article__header">
                <Avatar src={photoUrl+" "} alt={name}/>
                <div className="article__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="article__body">
                <p>{message}</p>
            </div>

            <div className="article__buttons">
                <PostOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <PostOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <PostOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <PostOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Article;