import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">&copy; 2023 PEROXANA</div>
          <div className="flex space-x-4">
            <a href="#" className="">
            <SocialIcon url="https://soundcloud.com/jaketrent" />
            </a>
            <a href="#" className="">
            <SocialIcon url="https://facebook.com/jaketrent" />
            </a>
            <a href="#" className="">
            <SocialIcon url="https://instagram.com/jaketrent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
