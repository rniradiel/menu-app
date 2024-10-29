'use client';
import Header from './components/Header';
import Product from './components/Product';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Reserve from './components/Reserve';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header/>
      <Home />
      <About />
      <Product />
      <Reserve />
      <Footer />
    </Fragment>
  );
}

export default App;
