import Image from 'next/image';
import Link from 'next/link';
import Insta from './Insta';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0  flex items-center z-50 justify-between bg-transparent py-5 px-6 ${className ?? ''}`}
    >
      <a href="/" className=" flex items-center">
        <Image src='/Untitled.png' alt='logo' width={60} height={20} />
      </a>
      <a href="intagram.com">
        <Insta />
      </a>
    </header>
  );
};

export default Navbar;
