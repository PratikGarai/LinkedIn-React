import PostContainer from './PostContainer/PostContainer';
import Article from './Article/Article';

import './Feed.css';

const Feed = () => {
    return (
        <div className="feed">
            <PostContainer />

            <Article 
                name="Pratik Garai" 
                description="this is a test" 
                message="this is a message" 
            />
        </div>
    )
}

export default Feed;