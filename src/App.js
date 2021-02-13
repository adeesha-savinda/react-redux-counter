import './App.css';
import Counter from './containers/Counter/Counter';

import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './store/index';

import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] dispatching ', action);
      const result = next(action);
      console.log('[Middleware] next state ', store.getState());
      return result;
    }
  };
};

// This is used to support redux browser extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
