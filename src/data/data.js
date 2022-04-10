import React from 'react';
import ReactPlayer from 'react-player';
import { FaReact, FaCode, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const BOOTSTRAP_FOR_SKILL_ICON = 'text-4xl mx-auto inline-block   ';
const data = {
  name: 'Tre Galloway',
  title: 'Frontend Dev/Content Creator',
  social: {
    github: 'https://github.com/TreGalloway',
    instagram: 'https://www.instagram.com/bytregalloway/',
    linkedin: 'https://www.linkedin.com/in/tre-galloway-98bb0a199/',
    youtube: ' https://www.youtube.com/channel/UCRQPGu1zovYhIdP86WCTKLw',
    twitter: 'https://twitter.com/bytregalloway',
    email: 'tre@tregalloway.com',
  },
  about: {
    title: (
      <div className="underline decoration-primary-400">My Background</div>
    ),
    description:
      'Thanks for checking out my website 🙏🏽! I have work many different jobs, started so many side projects, and all looking for things I like to do. Then one day a video popped up on YouTube about coding that got me interested in it. Started learning Python as a one off thing🤷🏽‍♂️, but along the way started to really get into coding and once I found out about front-end web development I was all in🧑🏽‍💻. Now I’ve learned the basics then moved on to React, Tailwind, SCSS and more in the future.  ',
    video: (
      <ReactPlayer url="https://www.youtube.com/watch?v=xaHqD5T-UgQ&t=10s" />
    ),
  },
  skills: [
    {
      skillName: 'Frontend',
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'TailwindCSS',
      skillIcon: <SiTailwindcss className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'ReactJS',
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },

    {
      skillName: 'Git',
      skillIcon: <FaGitAlt className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: 'Crown Clothing',
      image: <image src="../../assets/images/coffeeshop.jpg" />,
      description:
        '💻 A E-commerce website made with React, Redux, Firebase, Styled-Components.',
      tags: ['ecommerce', 'redux', 'reactjs', 'styled-components', 'firebase'],
      link: 'https://github.com/TreGalloway/crwn-clothing-v2',
    },
    {
      title: 'RV Rental website',
      description:
        '🚎 A website I made for family friend with React + TailwindCSS.',
      tags: ['website', 'rental', 'React', 'tailwindcss'],
      link: 'https://github.com/TreGalloway/rv-site',
    },
    {
      title: 'Face Recongiton Brain',
      description: '🧠 Quick Project using face recognition api.',
      tags: ['api', 'react'],
      link: 'https://github.com/TreGalloway/face-recognition-brain',
    },
    {
      title: 'Robo Friends',
      description: '🤖 Fun Robot name search.',
      tags: ['api', 'react'],
      link: 'https://github.com/TreGalloway/robofriends',
    },
  ],
};
export default data;
