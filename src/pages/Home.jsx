import Header from './../components/header/Header';

const Home = () => {
    return (
        <>
            <Header />

            <main className='section'>
                <div className='container'>
                    <ul className='content-list'>
                        <li className='content-list__item'>
                            <h2 className='title-2'>МИССИЯ</h2>
                            <p>
                                Повышение витальности человека. Осуществление
                                физического, психологического, нравственного и
                                душевного оздоровления. Обеспечение непрерывного
                                развития людей в единстве телесных, психических,
                                моральных и духовных планов.
                            </p>
                        </li>
                        <li className='content-list__item'>
                            <h2 className='title-2'>ОСНОВНЫЕ ЗАДАЧИ</h2>
                            <p>
                                Разработка новых систем, модулей и
                                психотехнологий интегрального
                                нейропрограммирования.Психотерапия и
                                психологическое консультирование человеческих
                                проблем.
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Home;
