'use client';
import logoImg from '../assets/logo.png';
import Image from "next/image";
import CartButton from './CartButton';

export default function Header() {
  return (
    <>
      <header id="main-header" className="flex justify-between bg-blue p-4">
        <div id="main-title" className="flex content-center justify-center">
          <Image src={logoImg} alt="A plate with food on it" priority className="w-12 h-12 mr-2" />
          <h1 className="text-3xl font-bold text-gold">Bite & Bliss</h1>
        </div>
        <div className="text-right mr-2">
          <CartButton />
        </div>
      </header>
    </>
  );
}
