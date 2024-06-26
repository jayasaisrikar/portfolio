import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold">Connect with me:</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/jayasaisrikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jayasaisrikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/jayasaisrikar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">Contact</p>
            <p className="mt-2">
              Email: <a href="jayasaisrikar@gmail.com">jayasaisrikar@gmail.com</a>
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
