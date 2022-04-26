import React from 'react';
import ReactPlayer from 'react-player';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaSass } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import coffeeshop from '../assets/images/coffeeshop.jpg';

const BOOTSTRAP_FOR_SKILL_ICON =
  'text-4xl mx-auto inline-block  text-primary-400';
const data = {
  name: 'Tre Galloway',
  title: 'Frontend Software Engineer/Content Creator',
  social: {
    github: 'https://github.com/TreGalloway',
    instagram: 'https://www.instagram.com/bytregalloway/',
    githubedin: 'https://www.githubedin.com/in/tre-galloway-98bb0a199/',
    youtube: ' https://www.youtube.com/channel/UCRQPGu1zovYhIdP86WCTKLw',
    twitter: 'https://twitter.com/bytregalloway',
    email: 'tre@tregalloway.com',
    hashnode: 'https://tregalloway.hashnode.dev/',
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
      skillName: 'Html',
      skillIcon: <FaHtml5 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'CSS',
      skillIcon: <FaCss3Alt className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Javascript',
      skillIcon: <DiJavascript1 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'ReactJS',
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },

    {
      skillName: 'TailwindCSS',
      skillIcon: <SiTailwindcss className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },

    {
      skillName: 'Sass',
      skillIcon: <FaSass className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Git',
      skillIcon: <FaGitAlt className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: 'Crown Clothing',
      image: (
        <img
          alt=""
          src={
            require('/Users/tre/personal-website/src/assets/images/coffeeshop.jpg')
              .default
          }
        />
      ),
      description:
        '💻 A E-commerce website made with React, Redux, Firebase, Styled-Components.',
      tags: ['ecommerce', 'redux', 'reactjs', 'styled-components', 'firebase'],
      github: 'https://github.com/TreGalloway/crwn-clothing-v2',
      live: '',
    },
    {
      title: 'CoastalSoulRv',
      image: <img alt="" src="https://unsplash.com/photos/p-ot9YnTlRQ" />,
      description:
        '🚎 A website I made for family friend with React + TailwindCSS.',
      tags: ['website', 'rental', 'React', 'tailwindcss'],
      github: 'https://github.com/TreGalloway/rv-site',
      live: '',
    },
    {
      title: 'Face Recongiton Brain',
      image: <img alt="" src={coffeeshop} />,
      description: '🧠 Quick Project using face recognition api.',
      tags: ['api', 'react'],
      github: 'https://github.com/TreGalloway/face-recognition-brain',
      live: '',
    },
    {
      title: 'Robo Friends',
      image: <img alt="" src={coffeeshop} />,
      description: '🤖 Fun Robot name search.',
      tags: ['api', 'react'],
      github: 'https://github.com/TreGalloway/robofriends',
      live: '',
    },
  ],
};
export default data;
