'use client';
import logoImg from '../../assets/logo.png';
import Image from "next/image";
import CartButton from '../../cart/cart-button';

export default function Header() {
  return (
    <>
      <header id="main-header" className="flex justify-between bg-red p-4">
        <div id="main-title" className="flex align-center justify-center">
          <Image src={logoImg} alt="A plate with food on it" priority className="w-12 h-12 mr-2" />
          <h1 className="text-3xl font-bold text-white">Menu App</h1>
        </div>
        <div className="text-right mr-2">
          <CartButton />
        </div>
      </header>
    </>
  );
}
