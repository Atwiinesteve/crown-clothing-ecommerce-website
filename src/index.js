import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {UserProvider} from './context/user.context';
import { Provider } from 'react-redux';
import {Elements} from '@stripe/react-stripe-js';

import { stripePromise } from './utils/stripe/stripe';
import store from './store/store';

import './index.css';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';
import Loading from './components/Loading';

const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Suspense fallback={<Loading/>}>
          <UserProvider>
            <CategoriesProvider>
              <CartProvider>
                {/* <Elements stripe={stripePromise}> */}
                  <App />
                {/* </Elements> */}
              </CartProvider>
            </CategoriesProvider>
          </UserProvider>
      </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);