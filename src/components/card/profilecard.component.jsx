import React from 'react';
import profile from '../../assets/images/profile.png';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function ProfileCard({
  name,
  title,
  social: { github, linkedin, twitter, youtube, instagram, email },
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs p-5 mx-auto bg-white shadow-xl rounded-xl">
        <div className="">
          <img
            className="w-32 mx-auto rounded-full shadow-xl"
            src={profile}
            alt="Profile face"
          />
        </div>
        <div className="mt-5 text-center">
          <p className="text-xl font-semibold text-gray-900 sm:text-2xl ">
            {name}
          </p>
          <p className="inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 border-b-2 sm:text-base">
            {title}
          </p>
          <div className="flex justify-center mt-4 align-center">
            <a
              className="p-1 m-1 text-xl text-gray-800 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-gray-800 hover:text-white"
              href={github}>
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a
              className="p-1 m-1 text-xl text-blue-600 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-blue-600 hover:text-white"
              href={linkedin}>
              <FaLinkedin />
              <span class="sr-only">linkedin</span>
            </a>
            <a
              className="p-1 m-1 text-xl text-red-600 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-red-600 hover:text-white"
              href={youtube}>
              <FaYoutube />
              <span class="sr-only">YouTube</span>
            </a>
            <a
              className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-blue-500 hover:text-white"
              href={twitter}>
              <FaTwitter />
              <span class="sr-only">Twitter</span>
            </a>
            <a
              className="p-1 m-1 text-xl text-pink-600 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-pink-600 hover:text-white"
              href={instagram}>
              <FaInstagram />
              <span class="sr-only">Instagram</span>
            </a>
            <a
              className="p-1 m-1 text-xl text-teal-500 transition-colors duration-300 rounded-full sm:m-2 sm:p-2 hover:bg-teal-500 hover:text-white"
              href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + email}>
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
