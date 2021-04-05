import CreateIcon from '@material-ui/icons/Create';

import './PostContainer.css'

const PostContainer = () => {
    return (
        <div className="post__container">
            <div className="post__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default PostContainer;