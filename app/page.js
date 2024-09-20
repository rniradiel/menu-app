'use client';
import Header from './components/Header';
import Product from './components/Product';
import Notification from './components/Notification';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

function App() {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <Fragment>
      {notification && (
          <Notification 
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
      )}
      <Header/>
      <Home />
      <About />
      <Product />
      <Footer />
    </Fragment>
  );
}

export default App;
