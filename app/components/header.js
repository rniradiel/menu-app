'use client';
import logoImg from './../assets/logo.png';
import Image from "next/image";

import { useRef } from 'react';

// import CartModal from './cart-modal.js';

export default function Header() {
  const modal = useRef();

  function handleOpenCartClick() {
    modal.current.open();
  }

  // let modalActions = <button>Close</button>;

  // if (cartQuantity > 0) {
  //   modalActions = (
  //     <>
  //       <button>Close</button>
  //       <button>Checkout</button>
  //     </>
  //   );
  // }

  return (
    <>
      {/* <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      /> */}
      <header id="main-header" className="flex justify-between bg-red py-4">
        <div id="main-title" className="flex align-center justify-center">
          <Image src={logoImg} alt="A plate with food on it" priority className="w-12 h-12 mr-2" />
          <h1 className="text-3xl font-bold">Menu App</h1>
        </div>
        <div className="text-right mr-2">
          <button onClick={handleOpenCartClick} className="bg-orange hover:bg-orange-hover text-white font-bold py-2 px-4 rounded">
            Cart (0)
          </button>
        </div>
      </header>
    </>
  );
}
