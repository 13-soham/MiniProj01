import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Context from './utils/Context.jsx';
import AuthContext from './Auth/AuthContext.jsx';
import SearchContext from './utils/SearchContext.jsx';
import ThemeContext from './utils/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <AuthContext>
      <SearchContext>
        <Context>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Context>
      </SearchContext>
    </AuthContext>
  </ThemeContext>
);
