import { NavLink } from "react-router-dom";
import projects from "../../components/helpers/project_list";
import sofaimg from "./../../img/projects/01_SOFA.jpg";
// console.log(projects[1], '#3', projects[1].title)

const ProjectPageAboutMe = () => {
    // const {id} = useParams();
    // const project = projects[id];
    // console.log(project, '3')

    return (
        <main className='section'>
            <div className='container'>
                <div className='wrapper_about-me'>
                    <img
                        src={sofaimg}
                        alt={projects[1].title}
                        className='left-image'
                    />
                    <div className='right-list'>
                        <h1 className='title-1'>{projects[1].title}</h1>
                        <p>
                            Практикующий ИНП-психолог София Леонтьева. Уже более
                            2,5 лет занимаюсь консультированием, психокоррекцией
                            и психотерапией в системе интегрального
                            нейропрограмирования (ИНП):
                        </p>
                        <ul className='right-list__list'>
                            <li className='right-list__item'>
                                <p>
                                    И - интегральное - направление включает
                                    почти все основные психотерапевтические
                                    методы, подходы и знания о человеке. Методы
                                    четко систематизированы в модули работы.
                                </p>
                            </li>
                            <li className='right-list__item'>
                                <p>
                                    Н - нейро - психолог создает новые нейронные
                                    связи в вашей голове.
                                </p>
                            </li>
                            <li className='right-list__item'>
                                <p>
                                    П - программирование, перепроживание,
                                    переобучение - психолог находит,
                                    диагностирует, "вскрывает",
                                </p>
                            </li>
                            <li className='right-list__item'>
                                <p>
                                    Мои принципы работы: уверенность,
                                    ответственность и принятие.
                                </p>
                            </li>
                        </ul>
                        <NavLink to={'posts'} className='btn'>
                            об интегральном нейропрограммировании
                        </NavLink>
                    </div>
                </div>
                <div className='wrapper_my-help'>
                    <h1 className='title-1'>
                        Что с моей помощью Вы можете решить?
                    </h1>
                    <p>
                        Вы можете обратиться ко мне с любым запросом, жалобой
                        или проблемой. А также, мы с вами можем работать над
                        постановкой любой жизненной цели, созданием готовности и
                        способности к ее достижению. Варианты самых
                        распространенных запросов:
                    </p>
                    <ul className='my-help-list'>
                        <li className='my-help-item'>
                            <p>
                                Создать, наладить, завершить отношения, пережить
                                расставание
                            </p>
                        </li>
                        <li className='my-help-item'>
                            <p>Повысить свое материальное благополучие</p>
                        </li>
                        <li className='my-help-item'>
                            <p>
                                Найти свои сильные стороны, любимое дело, работу
                            </p>
                        </li>
                        <li className='my-help-item'>
                            <p>Перейти в другую сферу деятельности</p>
                        </li>
                        <li className='my-help-item'>
                            <p>Спокойно реагировать на начальство</p>
                        </li>
                        <li className='my-help-item'>
                            <p>
                                Перестать испытывать стыд, позор, вину, апатию,
                                страх, обиду
                            </p>
                        </li>
                        <li className='my-help-item'>
                            <p>Повысить самооценку и уверенность в себе</p>
                        </li>
                        <li className='my-help-item'>
                            <p>
                                Научиться получать удовольствие от секса,
                                раскрыть свою сексуальность
                            </p>
                        </li>
                        <li className='my-help-item'>
                            <p>Пережить горе утраты близких и родных</p>
                        </li>
                        <li className='my-help-item'>
                            <p>
                                Перейти от зависимого поведения к здоровому:
                                алкоголизм, трудоголизм, пищевые расстройства и
                                др
                            </p>
                        </li>
                        <li className='my-help-item'>
                            <p>
                                Перейти от болезни к здравию, принять свое тело
                                и восстановить с ним контакт
                            </p>
                        </li>
                        <li className='my-help-item'>
                            <p>
                                Постановка любой жизненной цели, создание
                                готовности и способности к ее достижению
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default ProjectPageAboutMe;
