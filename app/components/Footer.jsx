'use client';
import logoImg from '../assets/logo.png';
import Image from "next/image";
import CartButton from './CartButton';

export default function Footer() {
  return (
    <>
      <footer id="main-footer" className="bg-blue p-4">
        <p className='text-center text-white'>© 2024 Bite & Bliss. All Rights Reserved.</p>
      </footer>
    </>
  );
}
