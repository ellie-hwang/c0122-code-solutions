import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Carousel from './carousel';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<Carousel />);
