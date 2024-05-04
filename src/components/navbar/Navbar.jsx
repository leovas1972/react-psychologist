import { NavLink } from "react-router-dom";
import BtnDarkMode from './../btnDarkMode/BtnDarkMode';
import "./navbar.css";



const activeLink = ({isActive}) => (
    isActive ? 'nav-list__link nav-list__link--active': 'nav-list__link'
);

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='nav-row'>
                    <NavLink to='/' className='logo'>
                        <strong>Леонтьева</strong> SOFA
                    </NavLink>

                    <BtnDarkMode/>

                    <ul className='nav-list'>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/'
                                className={activeLink}
                            >
                                Главная
                            </NavLink>
                           
                        </li>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/projects'
                                className={activeLink}
                            >
                                Обо мне
                            </NavLink>
                           
                        </li>
                        <li className='nav-list__item'>
                            <NavLink
                                to='/contacts'
                                className={activeLink}
                            >
                                Контакты
                            </NavLink>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
