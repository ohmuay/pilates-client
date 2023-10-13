import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import AuthorizeProvider from "../src/context/Authorize.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(<AuthorizeProvider><App /></AuthorizeProvider>)
