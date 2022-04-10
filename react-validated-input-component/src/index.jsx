import React from 'react';
import ReactDOMClient from 'react-dom/client';
import ValidatedInput from './app-drawer';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<ValidatedInput />);
