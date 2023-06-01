"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 backdrop-blur-2xl flex items-center z-50 justify-between w-full py-2 md:py-5 px-6 ${className ?? ''}`}>
      <Link href="/" className="flex items-center">
        <Image src='/LOGOS.png' alt='logo' width={30} height={30} />
      </Link>
      <div className="relative">
        <Image src={'/hamburger.svg'} alt="ham" width={30} height={30} className="cursor-pointer" onTouchStart={toggleDropdown} onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div ref={dropdownRef} className="fixed z-10 w-1/2 right-0 left-0 mx-auto mt-2 bg-[#FFFF00] shadow-lg rounded-md">
            <Link href="#about" className="block rounded-t-2xl font-bold py-5 text-center text-xl px-4 text-[#171717] hover:bg-gray-800 hover:text-[#d3d36f]" onClick={closeDropdown}>About me</Link>
            <Link href="#contact" className="block py-5 font-bold text-center px-4 text-xl text-[#171717] hover:bg-gray-800 hover:text-[#d3d36f]" onClick={closeDropdown}>Contact me</Link>
            <Link href="#links" className="block py-5 font-bold rounded-b-2xl text-xl text-center px-4 text-[#171717] hover:bg-gray-800 hover:text-[#d3d36f]" onClick={closeDropdown}>Links</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
