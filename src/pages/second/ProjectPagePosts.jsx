import {NavLink} from 'react-router-dom';
const ProjectPagePosts = () => {
    return (
        <main className="section" style={{minHeight: 'calc(100vh - 76px - 196px)'}}>
            <div className='container'>
            <h2 className='title-2'>Статьи</h2>
            <NavLink to={'inp'}>Интегральное нейропрограммирование (ИНП)</NavLink>
            </div>
        </main>
    );
};

export default ProjectPagePosts;
