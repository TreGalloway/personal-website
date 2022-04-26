import React, { useEffect } from 'react';
import ProfileCard from './components/profile/profilecard.component';
import About from './components/about/about.component';
import Projects from './components/projects/project.component';
import Skills from './components/skills/skills.component';
import data from './data/data';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen px-3 py-10 bg-gray-100 sm:px-5">
      <div data-aos="fade-down" data-aos-duration="800">
        <ProfileCard name={data.name} title={data.title} social={data.social} />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
      </div>
    </div>
  );
}
export default App;
