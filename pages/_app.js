import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  // Load Bootstrap JS on client side only
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
