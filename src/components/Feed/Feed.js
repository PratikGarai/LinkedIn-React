import {useEffect, useState} from 'react';
import PostContainer from './PostContainer/PostContainer';
import Article from './Article/Article';
import {db} from '../../firebase';

import './Feed.css';

const Feed = () => {

    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        db
            .collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setArticles(
                    snapshot.docs.map(doc => ({
                        id : doc.id,
                        ...doc.data(),
                    }))
                )
            })
    }, []);

    return (
        <div className="feed">
            <PostContainer setArticles={setArticles} />

            {articles.map((article) => 
                <Article 
                    name={article.name} 
                    description={article.description} 
                    message={article.message}
                    key = {article.id}
                />
            )}
        </div>
    )
}

export default Feed;