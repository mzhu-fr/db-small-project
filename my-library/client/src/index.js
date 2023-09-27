import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Store from './store/store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={Store}>
    <AuthContextProvider><App /></AuthContextProvider>

  </Provider>

);