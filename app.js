/*
 * Module dependencies
 */

import React from 'React';
import ImageGrid from './components/ImageGrid';
import ImageActions from './actions/ImageActions';

// each 5 seconds

setTimeout(() => {
  ImageActions.fetchList
}, 1000)

React.render(
  <ImageGrid />,
  document.getElementById('container');
)
