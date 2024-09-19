'use client';
import { uiActions } from '../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

export default function CartButton() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className="bg-gold hover:bg-lightGold text-white font-bold py-2 px-4 rounded" onClick={toggleCartHandler}>
      <span>My Cart ({cartQuantity})</span>
    </button>
  );
};
