'use client';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

export default function Product({
  id,
  image,
  title,
  price,
  description,
}) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title, 
      price,
    }));
  }

  return (
    <article className="h-full bg-red rounded-md shadow-md flex flex-col">
      <Image src={image} alt={title} className="w-full rounded-t-md" />
      <div className="flex-1 p-4 pb-2 flex flex-col justify-between">
        <div>
          <h3 className="text-orange text-lg mb-1 font-bold">{title}</h3>
          <p className="text-orange text-base mb-0 font-bold">P{price}</p>
          <p>{description}</p>
        </div>
        <p className="text-right">
          <button 
            className="bg-orange hover:bg-[#f5b744] border-none rounded-md px-4 py-2 text-[#201e1a] cursor-pointer"
            onClick={addToCartHandler}>
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}
