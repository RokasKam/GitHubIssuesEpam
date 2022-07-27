import React from 'react';
import renderer from 'react-test-renderer';
import { CheckBoxBlock } from '../src/components/CheckBoxBlock'

test('renders correctly', () => {
  const tree = renderer.create(<CheckBoxBlock text={''} value={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});