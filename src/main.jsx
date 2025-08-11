import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Greeting from './Greeting.jsx';
import { Food, Hate, Love } from './Food.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hate />
    <Food />
    <Love />
    <Greeting />
  </StrictMode>,
)
