import React from 'react';
import ReactDOM from 'react-dom';

//import 'bootstrap/dist/js/bootstrap.bundle';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'font-awesome/css/font-awesome.css';

//import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
