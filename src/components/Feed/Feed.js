import {useState} from 'react';
import PostContainer from './PostContainer/PostContainer';
import Article from './Article/Article';

import articlesdata from '../../sampledata/articles';

import './Feed.css';

const Feed = () => {

    const [articles, ] = useState(articlesdata);

    return (
        <div className="feed">
            <PostContainer />

            {articles.map(article => 
            <Article 
                name={article.name} 
                description={article.description} 
                message={article.message}
            />)}
        </div>
    )
}

export default Feed;