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
        <Image src='/LOGOS.png' alt='logo' width={60} height={20} />
      </Link>
      <div className="relative">
        <Image src={'/hamburger.svg'} alt="ham" width={30} height={30} className="cursor-pointer" onTouchStart={toggleDropdown} onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div ref={dropdownRef} className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md">
            <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>About</Link>
            <Link href="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Services</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
