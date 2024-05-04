import {NavLink} from 'react-router-dom'
const ProjectPageEmpty = () => {
    return (
        <main className='section' style={{minHeight: 'calc(100vh - 76px - 196px)'}}>
            <div className='container'>
                <h1 className='title-1'>
                    Эта страница пока в разработке, переход на{" "}
                    <NavLink to={'/'}>Главную</NavLink>
                </h1>
            </div>
        </main>
    );
};

export default ProjectPageEmpty;
