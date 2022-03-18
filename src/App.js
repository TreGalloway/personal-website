import './App.css';
import Navbar from './components/navbar/navbar.component';
import HeroSection from './components/hero/hero.component';
import ProjectSection from './components/projects/projects.component';
import AboutSection from './components/about/about.component';
import FooterSection from './components/footer/footer.component';
import SkillSection from './components/skills/skills.component';
import ContactSection from './pages/contact/contact.component';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
