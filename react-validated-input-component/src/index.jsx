import React from 'react';
import ReactDOMClient from 'react-dom/client';
import ValidatedInput from './validated-input';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<ValidatedInput />);
