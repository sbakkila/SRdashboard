import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './photos'

import { Provider } from 'react-redux';

import Photos from './photos';
import PhotosContainer from './photosContainer';

import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <PhotosContainer />
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
