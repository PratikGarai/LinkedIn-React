import { Avatar } from '@material-ui/core';

import './Article.css';

const Article = ({name, description, message, photoUrl}) => {
    return (
        <div className="article">
            Article
            <div className="article__header">
                <Avatar />
                <div className="aricle__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="article__body">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Article;