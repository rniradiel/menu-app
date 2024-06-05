'use client';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

export default function CartItem(props) {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

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
    <li className="bg-gray-700 p-4 mb-4">
        <header className="flex justify-between items-baseline">
            <h3 className="text-2xl mb-1">{title}</h3>
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
                <button className="bg-transparent border border-white text-white px-4 py-2 mx-2 hover:bg-gray-600 active:bg-gray-600" onClick={removeItemHandler}>-</button>
                <button className="bg-transparent border border-white text-white px-4 py-2 mx-2 hover:bg-gray-600 active:bg-gray-600" onClick={addItemHandler}>+</button>
            </div>
        </div>
    </li>
  );
};