import React, { SetStateAction } from 'react';
import renderer from 'react-test-renderer';
import { IssuesList } from '../src/components/IssuesList'

test('renders correctly', () => {
  const tree = renderer.create(<IssuesList issues={undefined} handleOnEndReached={function (value: number): void {
    throw new Error('Function not implemented.');
  }} currentPageNumber={1} />).toJSON();
  expect(tree).toMatchSnapshot();
}); 