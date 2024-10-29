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
    <li className="flex justify-between p-2 md:p-4 mb-4">
        <div className="item-title flex items-center">
          <Image src={image} alt="cart-item" priority className="w-12 h-12 mr-2" />
          <h3 className="text-sm md:text-lg font-bold mb-1 md:min-w-40">{title}</h3>
        </div>
        <div className="item-quantity flex flex-row items-center">
          <button className="cart-buttons" onClick={removeItemHandler}>-</button>
          <span className="text-lg font-bold">{quantity}</span>
          <button className="cart-buttons" onClick={addItemHandler}>+</button>
        </div>
        <div className="item-price flex items-center">
            <span className="text-lg font-bold">
              P{total.toFixed(2)}{' '}
            </span>
        </div>
    </li>
  );
};