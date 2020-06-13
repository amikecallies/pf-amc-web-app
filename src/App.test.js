import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bug to fix: the following method: expect is not defined

/*it('sums numbers', () => {
  expect(testMe(1)).toEqual(1);
  expect(testMe(4)).toEqual(2);
});*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
