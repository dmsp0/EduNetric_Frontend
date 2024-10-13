import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub, faGoogleDrive, faYoutube } from '@fortawesome/free-brands-svg-icons'; // GitHub 아이콘 가져오기

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* 저작권 정보 */}
        <div className="text-center md:text-left">
          <p>&copy; 2024 EDUNETRIC. All rights reserved.</p>
        </div>

        {/* 주요 링크 */}
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </div>
      </div>

      <hr className="my-6 border-none"/> {/* 구분선 */}

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* 연락처 정보 */}
        <div className="text-center md:text-left">
          <p>Contact us: <a href="mailto:info@yourcompany.com" className="hover:underline">info@yourcompany.com</a> <br />
          Phone: +123-456-7890</p>
        </div>

        {/* 소셜 링크 */}
        <div className="flex space-x-6">
          {/* YouTube 아이콘 */}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          {/* Figma 아이콘 */}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faFigma} size="2x" />
          </a>
          {/* Google Drive 아이콘 */}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faGoogleDrive} size="2x" />
          </a>
          {/* GitHub 아이콘 */}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
