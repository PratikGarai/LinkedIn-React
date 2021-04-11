import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import './Sidebar.css';

const Sidebar = () => {

    const user = useSelector(state => state.user.currentUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl+" "} alt={user.displayName} />
                <h2>{user.displayName}</h2>
                <h4>{user.description}</h4>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you </p>
                    <p className="sidebar__statNumber">5,126</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post </p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('machine learning')}
                {recentItem('web development')}
                {recentItem('google')}
                {recentItem('software')}
                {recentItem('programming')}
            </div>
        </div>
    );
}

export default Sidebar;