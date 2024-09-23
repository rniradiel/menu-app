'use client';
import logoImg from '../assets/logo.png';
import Image from "next/image";
import Navbar from './Navbar';
import Cart from './Cart';
import CartButton from './CartButton';
import Notification from './Notification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from '../store/cart-actions';

let isInitial = true;

export default function Header() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  return (
    <>
      <header id="main-header" className="fixed top-0 w-full z-[99]">
        {notification && (
            <Notification 
              status={notification.status}
              title={notification.title}
              message={notification.message}
            />
        )}
        <div className='flex justify-between bg-blue p-4'>
          <div id="main-title" className="flex content-center justify-center">
            <Image src={logoImg} alt="A plate with food on it" priority className="w-12 h-12 mr-2" />
            <h1 className="text-3xl font-bold text-gold">Bite & Bliss</h1>
          </div>
          <div className="flex text-right md:mr-2">
            <Navbar />
            <CartButton />
          </div>
          {showCart && (
            <div className={notification ? 'cart cart-notification' : 'cart'}>
              <Cart />
            </div>
          )}
        </div>
      </header>
    </>
  );
}
