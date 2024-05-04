import "./footer.css";
import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import telegram from "./../../img/icons/telegram-white.svg";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <ul className='social'>
                        <li className='social__item'>
                            <a href='https://vk.com/soma_sophia'>
                                <img src={vk} alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='https://instagram.com/soma_sophia?igshid=MWZjMTM2ODFkZg=='>
                                <img src={instagram} alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='https://t.me/boltalka_soma_sophia'>
                                <img
                                    src={telegram}
                                    alt='Link'
                                />
                            </a>
                        </li>
                        {/* <li className='social__item'>
                            <a href='#!'>
                                <img src='./img/icons/gitHub.svg' alt='Link' />
                            </a>
                        </li>
                        <li className='social__item'>
                            <a href='#!'>
                                <img
                                    src='./img/icons/linkedIn.svg'
                                    alt='Link'
                                />
                            </a>
                        </li> */}
                    </ul>
                    <div className='copyright'>
                        <p>{new Date().getFullYear()} © Твой адрес эл.почты</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
