import { NavLink } from "react-router-dom";
import img from "./../../img/images/dvartsn.png";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import tg from "./../../img/icons/telegram-black.svg";

const ProjectPageMyService = () => {
    return (
        <main className='section'>
            <div className='container'>
                <h1 className='title-1'>Мои услуги</h1>
                <h2 className='title-2'>
                    Запись на сессию производится только по 50% предоплате.
                    Длительность одной сессии 1,5-2 часа.
                </h2>
                <div
                    className='my-service'
                    style={{
                        display: "inline-block",
                        padding: '12px 28px',
                        borderRadius: '5px',
                        backgroundColor: "#5c62ec",
                        color: '#fff'
                    }}
                >
                    <p>Индивидуальная терапевтическая сессия</p>
                    <p>4000p</p>
                    <p>Длительность: 1,5 - 2 часа</p>
                    <p>Формат: онлайн</p>
                </div>
                <h2 className='title-2'>Записаться на приём</h2>
                <p>
                    По ссылке ниже можете задать интересующий Вас вопрос и
                    записаться на первичную консультацию
                </p>
                <BtnGitHub
                    href={"https://t.me/soma_sophia"}
                    src={tg}
                    title={"telegram"}
                />
                <h2 className='title-2'>Полезные статьи</h2>
                <p>по теме работы психолога в направлении ИНП</p>
                <img src={img} alt='dvartsn' />
                <h2 className='title-2'>Предварительная беседа</h2>
                <p>
                    Как проходит беседа психолога и клиента перед началом
                    работы?
                </p>
                <NavLink to={"psych"} className='btn'>
                    читать
                </NavLink>
            </div>
        </main>
    );
};

export default ProjectPageMyService;
