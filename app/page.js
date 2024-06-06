'use client';
import Header from './components/header/header.js';
import Product from './product/page.js';
import ProductItem from './product/product-item/page.js';
import Cart from './cart/cart.js';
import Notification from './components/notification/notification.js';
import { DUMMY_PRODUCTS } from './dummy-products.js';
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
      <Header/>
      {notification && (
          <Notification 
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
      )}
      <main>
        {showCart && (
          <Cart />
        )}
        <Product>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <ProductItem {...product} />
            </li>
          ))}
        </Product>
      </main>
    </Fragment>
  );
}

export default App;
