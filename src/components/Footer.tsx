import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer: React.FC = () => {
  return (
    <footer id="links" className="bg-[#171717] text-white p-8">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">&copy; 2023 PEROXANA</div>
          <div className="flex space-x-4">
            <a href="#" className="">
              <SocialIcon url="https://soundcloud.com/peroxmusic" />
            </a>
            <a href="#" className="">
              <SocialIcon url="https://www.facebook.com/peroxmusic/" />
            </a>
            <a href="#" className="">
              <SocialIcon url="https://www.instagram.com/peroxofficial/?hl=en" />
            </a>
            <a href="#" className="">
              <SocialIcon url="https://www.youtube.com/@peroxmusic" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
