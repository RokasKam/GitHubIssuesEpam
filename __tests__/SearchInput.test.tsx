import React from 'react';
import renderer from 'react-test-renderer';
import { SearchInput } from '../src/components/SearchInput'

test('renders correctly', () => {
  const tree = renderer.create(<SearchInput placeholder={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});