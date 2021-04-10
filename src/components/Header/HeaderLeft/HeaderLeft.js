import './HeaderLeft.css';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../../assets/linkedin.svg';

const HeaderLeft = () => {
    return(
        <div className="header__left">
            <img src={logo} alt="LinkedIn"></img>

            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search..." type="text"></input>
            </div>
        </div>
    );
}

export default HeaderLeft;