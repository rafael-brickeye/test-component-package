import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import {List, ListPropTypes} from '../List';
import {Typography} from '../../typography';

afterEach(cleanup);

const renderItem = ({item}: {item: {id: number; title: string; testId: string}}) => (
  <Typography testID={item.testId}>{item.title}</Typography>
);
const keyExtractor = (item: {id: number}) => item.id.toString();

const defaultParams = {
  data: [
    {id: 1, title: 'hello', testId: 'test-component-item-1'},
    {id: 2, title: 'world', testId: 'test-component-item-2'},
  ],
  footerTestId: 'footer-component',
  isLoading: false,
  keyExtractor,
  renderItem,
};

const ListComponent = (props: Partial<ListPropTypes>) => <List {...defaultParams} {...props} />;

describe('Base List Component', () => {
  it('should match the existing snapshot', () => {
    const snapshot = render(<ListComponent />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to see the list of items passed from renderItem', () => {
    const {getByTestId} = render(<ListComponent />);

    expect(getByTestId('test-component-item-1')).toBeVisible();
    expect(getByTestId('test-component-item-1')).toHaveTextContent('hello');
    expect(getByTestId('test-component-item-2')).toBeVisible();
    expect(getByTestId('test-component-item-2')).toHaveTextContent('world');
  });

  it('should be able to render Footer Loader component when List component has isLoading set to TRUE', () => {
    const {getByTestId} = render(<ListComponent isLoading={true} />);

    expect(getByTestId(defaultParams.footerTestId)).toBeVisible();
  });
});
