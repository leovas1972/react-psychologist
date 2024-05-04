import { NavLink } from "react-router-dom";
import "./project.css";


const Project = ({index, title, img}) => {
    
    return (
        <NavLink to={`/projects/${index}`}>
            <li className='project'>
                <img src={img} alt={title} className='project__img' />
                <h3 className='project__title'>
                    {title}
                </h3>
            </li>
        </NavLink>
    );
};

export default Project;
