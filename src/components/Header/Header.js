import './Header.css';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderRight from './HeaderRight/HeaderRight';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <HeaderLeft />
            </div>
            <div className="header__right">
                <HeaderRight />
            </div>

        </div>
    )
}

export default Header;