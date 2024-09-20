import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <button className="md:hidden flex items-center px-3 py-2 rounded text-white ml-auto" onClick={handleToggleMenu}>
        <svg className="fill-white h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
        </svg>
      </button>
      <ul className={`md:flex items-center justify-between ${showMenu ? 'block' : 'hidden'}`}>
        <li className='p-2 md:mr-2'>
          <Link href="#home" className="text-lg text-white hover:text-gray-200">
            Home
          </Link>
        </li>
        <li className='p-2 md:mr-2'>
          <Link href="#about" className="text-lg text-white hover:text-gray-200">
            About
          </Link>
        </li>
        <li className='p-2'>
          <Link href="#menu" className="text-lg text-white hover:text-gray-200">
            Menu
          </Link>
        </li>
      </ul>
    </nav>
  );
}