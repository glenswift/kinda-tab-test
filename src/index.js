import 'babel-core/register';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
import App from './containers/AppContainer';
import store from './store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={Component} />
        </BrowserRouter>
      </Provider>
    </AppContainer>
    , document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    render(App);
  });
}
