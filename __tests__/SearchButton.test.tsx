import React from 'react';
import renderer from 'react-test-renderer';
import { SearchButton } from '../src/components/SearchButton'

test('renders correctly', () => {
  const tree = renderer.create(<SearchButton onPress={function (): void {
    throw new Error('Function not implemented.');
  }} text={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});