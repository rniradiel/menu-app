'use client';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart'
import Notification from './components/Notification';
import Home from './components/Home';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
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
    <Fragment>
      {notification && (
          <Notification 
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
      )}
      <Header/>
      <Home />
      <main>
        {showCart && <Cart />}
        <Product />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
