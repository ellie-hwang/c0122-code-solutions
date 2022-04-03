import React from 'react';
import ReactDOMClient from 'react-dom/client';
import AppDrawer from './app-drawer';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<AppDrawer />);
