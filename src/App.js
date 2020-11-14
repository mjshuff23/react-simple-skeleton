import React from 'react';
import { Provider } from 'react-redux';
import LoginForm from './components/LoginForm';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello world!</h1>
      <LoginForm />
    </div>
  </Provider>
);

export default App;
