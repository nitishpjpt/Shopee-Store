import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <Auth0Provider
    domain="dev-1t153a6zay48hysa.us.auth0.com"
    clientId="33G3IisgSHs4DQ79N4OdXwNMKoxY7XPz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
 </>
   
);

