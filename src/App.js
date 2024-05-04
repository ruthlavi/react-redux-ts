import React from 'react';
import { AppRouter } from './app/router';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <AppRouter></AppRouter>
    </Provider>
    </>

  );
}

export default App;
