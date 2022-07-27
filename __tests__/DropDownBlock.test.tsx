import React, { SetStateAction } from 'react';
import renderer, { act } from 'react-test-renderer';
import { DropDownBlock } from '../src/components/DropDownBlock'

test('renders correctly', async () => {
  const tree = renderer.create(<DropDownBlock value={''} setValue={function (value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  }} />).toJSON();
  await act(async () => {
    expect(tree).toMatchSnapshot();
  });
});