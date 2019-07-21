import React from 'react';
import renderer from 'react-test-renderer';
import App from 'App';

test('App mounts without failing', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
