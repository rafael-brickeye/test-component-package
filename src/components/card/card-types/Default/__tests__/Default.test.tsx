import React from 'react';
import {ViewProps, ViewStyle} from 'react-native';
import {cleanup, render, screen} from '@testing-library/react-native';
import '@testing-library/jest-native';
import {DefaultCard} from '../Default';
import {Typography} from '../../../../typography';
import {color} from '../../../../../themes/colors';

afterEach(cleanup);

const defaultCardParams = {isDisabled: false, onPress: () => null};
const testText = 'Hello World';
const parentId = 'parent-component';
const childId = 'child-component';

const DefaultCardComponent = (props: Partial<typeof defaultCardParams & ViewProps & ViewStyle>) => (
  <DefaultCard {...defaultCardParams} {...props} testID={parentId}>
    <Typography testID={childId}>{testText}</Typography>
  </DefaultCard>
);

describe('Default Card Component', () => {
  it('should match the existing snapshot', () => {
    const snapshot = render(<DefaultCardComponent />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render child component', () => {
    const {getByTestId} = render(<DefaultCardComponent />);

    expect(getByTestId(childId)).toBeVisible();
    expect(getByTestId(childId)).toHaveTextContent(testText);
  });

  it('should not be tappable when disabled', () => {
    const {getByTestId} = render(<DefaultCardComponent testID={parentId} isDisabled={true} />);

    expect(getByTestId(parentId)).toBeDisabled();
  });

  it('should be able to override default styling', () => {
    const newStyle = {
      backgroundColor: 'red',
    };

    render(<DefaultCardComponent {...newStyle} />);

    const parentComponent = screen.getByTestId(parentId);

    expect(parentComponent).not.toHaveStyle({backgroundColor: color.background.white});
    expect(parentComponent).toHaveStyle({...newStyle});
  });
});
