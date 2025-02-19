import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-photo-view/dist/react-photo-view.css';
import AuthContext from './contexts/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContext>
      <App />
    </AuthContext>
  </StrictMode>,
);
