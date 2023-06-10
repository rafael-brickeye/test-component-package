import React from 'react';
import {cleanup, render, screen} from '@testing-library/react-native';
import '@testing-library/jest-native';
import {BasicCard, BasicCardPropTypes} from '../Basic';
import {DefaultCardPropTypes} from '../../Default';
import {spacing} from '../../../../../themes';

afterEach(cleanup);

const defaultCardParams = {
  isDisabled: false,
  onPress: () => null,
  header: 'Hello',
  body: 'World',
  headerTestId: 'header-text',
  bodyTestId: 'body-text',
};
const basicCardTestId = 'basic-card-component';

const BasicCardComponent = (props: Partial<BasicCardPropTypes & DefaultCardPropTypes>) => (
  <BasicCard type="basic" {...defaultCardParams} {...props} />
);

describe('Basic Card Component', () => {
  it('should match the existing snapshot', () => {
    const snapshot = render(<BasicCardComponent />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render header and body', () => {
    const {getByTestId} = render(<BasicCardComponent />);

    expect(getByTestId(defaultCardParams.headerTestId)).toBeVisible();
    expect(getByTestId(defaultCardParams.headerTestId)).toHaveTextContent(defaultCardParams.header);
    expect(getByTestId(defaultCardParams.bodyTestId)).toBeVisible();
    expect(getByTestId(defaultCardParams.bodyTestId)).toHaveTextContent(defaultCardParams.body);
  });

  it('should not be tappable when disabled', () => {
    const {getByTestId} = render(<BasicCardComponent testID={basicCardTestId} isDisabled={true} />);

    expect(getByTestId(basicCardTestId)).toBeDisabled();
  });

  it('should be able to override default styling', () => {
    const newStyles = {
      paddingLeft: 100,
      backgroundColor: 'blue',
    };

    render(<BasicCardComponent testID={basicCardTestId} {...newStyles} />);

    const basicCardComponent = screen.getByTestId(basicCardTestId);

    expect(basicCardComponent).not.toHaveStyle({paddingLeft: spacing['s-36']});
    expect(basicCardComponent).toHaveStyle({...newStyles});
  });
});
