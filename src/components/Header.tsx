// components/Navbar.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#663333] p-4">
      <div className="container mx-auto flex justify-left items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="rounded-full mr-4"/>
            <div className="text-white text-xl md:text-2xl lg:text-3xl chakra-petch-medium">Tech Blog</div>
          </div>
        </Link>
        {/* Remove the right button */}
      </div>
    </nav>
  );
}

export default Navbar;
