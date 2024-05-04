import {NavLink} from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <h1 className='header__title'>
                    <strong>
                        Меня зовут <em>София</em>
                    </strong>
                    <br />я психолог
                </h1>
                <div className='header__text'>
                    <p>
                        обеспечение непрерывного развития людей в единстве
                        телесных, психических, моральных и духовных планов
                    </p>
                </div>
                <NavLink to='/projects' className='btn'>
                    ПОДРОБНЕЕ
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
