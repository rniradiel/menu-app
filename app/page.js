import Header from './components/header.js';
import Menu from './components/menu.js';
import Product from './components/product.js';
import { DUMMY_PRODUCTS } from './dummy-products.js';

function App() {
  return (
    <>
      <Header/>
      <Menu> 
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Menu>
    </>
  );
}

export default App;
