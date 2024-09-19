import ProductItem from './ProductItem';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export default function Menu({ children }) {
    return (
      <section id="menu" className="bg-blue px-2 py-8">
        <h2 className="text-white text-center text-red text-3xl font-bold mb-8">Menu</h2>
        <ul id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <ProductItem {...product} />
            </li>
          ))}
        </ul>
      </section>
    );
}