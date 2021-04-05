import './PostOption.css';

const PostOption = ({title, Icon, color}) => {
    return (
        <div className="option">
            <Icon style={{color:color}} />
            <h4>{title}</h4>
        </div>
    )
}


export default PostOption;