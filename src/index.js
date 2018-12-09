import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Import reducers
import feeling from './components/redux/reducers/feeling.reducer';
import content from './components/redux/reducers/content.reducer';
import supported from './components/redux/reducers/supported.reducer';
import comment from './components/redux/reducers/comment.reducer';

const storeInstance = createStore(
  combineReducers({
    feeling,
    content,
    supported,
    comment
  }),
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
