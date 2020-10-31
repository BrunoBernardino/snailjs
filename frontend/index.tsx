import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const root = document.getElementById('root');
const load = () =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    root,
  );

// @ts-ignore: This is needed for Hot Module Replacement
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./App', load);
}

load();
