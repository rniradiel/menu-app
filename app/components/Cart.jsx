'use client';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2 className='text-lg font-bold text-center mb-1'>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{ 
              id: item.id,
              title: item.name, 
              quantity: item.quantity, 
              total: item.totalPrice, 
              price: item.price, 
              image: item.image
            }}
          />
        ))}
      </ul>
    </div>
  );
};
