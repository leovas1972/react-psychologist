import projects from './../components/helpers/project_list';
import Project from '../components/project/Project';

const Projects = () => {
    return (
        <main className='section'>
            <div className='container'>
                <ul className='projects'>
                    {projects.map((project, index) => (
                        <Project 
                        key={project.id}
                        index={index} 
                        {...project} 
                        />
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Projects;
