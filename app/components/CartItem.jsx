'use client';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import Image from 'next/image';

export default function CartItem(props) {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id, image } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id, 
      title, 
      price,
    }));
  };
  
  return (
    <li className="p-4 mb-4 text-white">
        <Image src={image} alt="cart-item" priority className="w-12 h-12 mr-2" />
        <header className="flex justify-between items-baseline">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <div className="text-lg font-bold">
              P{total.toFixed(2)}{' '}
              <span className="text-base font-normal italic">(P{price.toFixed(2)}/item)</span>
            </div>
        </header>
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                x <span className="text-lg font-bold">{quantity}</span>
            </div>
            <div className="flex justify-end mb-2">
                <button className="cart-buttons" onClick={removeItemHandler}>-</button>
                <button className="cart-buttons" onClick={addItemHandler}>+</button>
            </div>
        </div>
    </li>
  );
};