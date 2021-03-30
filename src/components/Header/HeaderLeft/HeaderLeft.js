import './HeaderLeft.css';
import SearchIcon from '@material-ui/icons/Search';

const HeaderLeft = () => {
    return(
        <div className="header__left">
            <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1617102778~hmac=73aa0ab982b09192e47e02edff6baed1" alt="LinkedIn"></img>

            <div className="header__search">
                <SearchIcon />
                <input type="text"></input>
            </div>
        </div>
    );
}

export default HeaderLeft;