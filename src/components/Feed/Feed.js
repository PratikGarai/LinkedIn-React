import {useState} from 'react';
import PostContainer from './PostContainer/PostContainer';
import Article from './Article/Article';

import articlesdata from '../../sampledata/articles';

import './Feed.css';

const Feed = () => {

    const [articles, setArticles] = useState(articlesdata);

    return (
        <div className="feed">
            <PostContainer setArticles={setArticles} />

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