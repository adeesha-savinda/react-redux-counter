import './App.css';
import Counter from './containers/Counter/Counter';

import { createStore } from 'redux';
import reducer from './store/index';

import { Provider } from 'react-redux';

const store = createStore(reducer);

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
