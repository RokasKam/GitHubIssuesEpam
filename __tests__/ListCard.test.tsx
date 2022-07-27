import React from 'react';
import renderer from 'react-test-renderer';
import { ListCard } from '../src/components/ListCard'

test('renders correctly', () => {
  const tree = renderer.create(<ListCard itemId={''} itemTitle={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});