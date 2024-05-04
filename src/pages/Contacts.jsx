const Contacts = () => {
    return (
        <main className='section' style={{minHeight: 'calc(100vh - 76px - 196px)'}}>
            <div className='container'>
                <h1 className='title-1'>Контакты</h1>

                <ul className='content-list'>
                    <li className='content-list__item'>
                        <h2 className='title-2'>Location</h2>
                        <p>Novosibirsk, Russia</p>
                    </li>
                    <li className='content-list__item'>
                        <h2 className='title-2'>WhatsApp</h2>
                        <p>
                            <a href='tel:+79538061547'>+7 (953) 806-15-47</a>
                        </p>
                    </li>
                    <li className='content-list__item'>
                        <h2 className='title-2'>Email</h2>
                        <p>
                            <a href='mailto:leovas1972@gmail.com'>
                                leovas1972@gmail.com
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;
