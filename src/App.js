import { Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import Home from './pages/Home';
import ProjectPageAboutMe from './pages/second/ProjectPage-about-me';
import ProjectPageEducation from './pages/second/ProjectPage-education';
import ProjectPageWorkPlan from './pages/second/ProjectPage-work-plan';
import ProjectPageMyService from './pages/second/ProjectPage-MyService';
import ProjectPageEmpty from './pages/second/ProjectPageEmpty';
import ProjectPagePosts from './pages/second/ProjectPagePosts';
import PsychologicalContract from './pages/third/PsychologicalContract';
import Certificates from './pages/third/certificates/Certificates';
import PostINP from './pages/posts/Post-INP';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects/' element={<Projects />} />
        <Route path='projects/0/' element={<ProjectPagePosts />} />
        <Route path='projects/1/' element={<ProjectPageAboutMe />} />
        <Route path='projects/2/' element={<ProjectPageEducation />} />
        <Route path='projects/3/' element={<ProjectPageWorkPlan />} />
        <Route path='projects/4/' element={<ProjectPageEmpty />} />
        <Route path='projects/5/' element={<ProjectPageMyService />} />
        <Route path='projects/2/certificates' element={<Certificates />} />
        <Route path='projects/3/psych' element={<PsychologicalContract />} />
        <Route path='projects/5/psych' element={<PsychologicalContract />} />
        <Route path='projects/1/posts' element={<ProjectPagePosts />} />
        <Route path='projects/2/posts' element={<ProjectPagePosts />} />
        <Route path='projects/0/inp' element={<PostINP />} />
        <Route path='contacts' element={<Contacts />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
