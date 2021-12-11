import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App';
import { NoteProvider } from '../src/components/NoteContext';

ReactDOM.render(
  <Auth0Provider
    domain="dev-zzde03fa.us.auth0.com"
    clientId="DkNHcwL6WqzGZOfbiCccY8taouRW8OJz"
    redirectUri={window.location.origin}
  >
    <NoteProvider>
      <App />
    </NoteProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
