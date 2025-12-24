import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Context from './utils/Context.jsx';
import AuthContext from './Auth/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </AuthContext>
);
