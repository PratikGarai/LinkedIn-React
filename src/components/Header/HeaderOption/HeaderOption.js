import { Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../redux/user/user.actions';
import { auth } from '../../../firebase';

import './HeaderOption.css';

const HeaderOption = ({avatar, Icon, title}) => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setCurrentUser(null));
        auth.signOut();
    }

    return(
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon"></Icon>}
            {avatar && <Avatar className="headerOption__icon avatar" alt={title} src={avatar} onClick={logout} />}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
}

export default HeaderOption;