import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyForm from './MyForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyForm />, document.getElementById('root'));
registerServiceWorker();
