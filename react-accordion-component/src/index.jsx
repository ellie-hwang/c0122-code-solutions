import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Accordion from './accordion';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<Accordion />);
