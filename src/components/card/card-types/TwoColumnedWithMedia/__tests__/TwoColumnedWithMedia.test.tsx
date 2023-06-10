import React from 'react';
import {cleanup, render, screen} from '@testing-library/react-native';
import '@testing-library/jest-native';
import {TwoColumnedWithMediaCard, TwoColumnedWithMediaCardPropTypes} from '../TwoColumnedWithMedia';
import {DefaultCardPropTypes} from '../../Default';
import {color, spacing} from '../../../../../themes';

afterEach(cleanup);

const defaultCardParams = {
  isDisabled: false,
  onPress: () => null,
  middleHeader: 'hello',
  middleHeaderTestId: 'middle-header-text',
  middleBody: 'world',
  middleBodyTestId: 'middle-body-text',
  rightHeader: 'foo',
  rightHeaderTestId: 'right-header-text',
  rightBody: 'bar',
  rightBodyTestId: 'right-body-text',
};
const twoColumnedWithMediaCardTestId = 'two-columned-with-media-card-component';

const TwoColumnedWithMediaCardComponent = (
  props: Partial<TwoColumnedWithMediaCardPropTypes & DefaultCardPropTypes>,
) => <TwoColumnedWithMediaCard type="two-columned-with-media" {...defaultCardParams} {...props} />;

describe('Two Columned With Media Card Component', () => {
  it('should match the existing snapshot', () => {
    const snapshot = render(<TwoColumnedWithMediaCardComponent />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render headers and bodies', () => {
    const {getByTestId} = render(<TwoColumnedWithMediaCardComponent />);

    expect(getByTestId(defaultCardParams.middleHeaderTestId)).toBeVisible();
    expect(getByTestId(defaultCardParams.middleHeaderTestId)).toHaveTextContent(defaultCardParams.middleHeader);
    expect(getByTestId(defaultCardParams.middleBodyTestId)).toBeVisible();
    expect(getByTestId(defaultCardParams.middleBodyTestId)).toHaveTextContent(defaultCardParams.middleBody);
    expect(getByTestId(defaultCardParams.rightHeaderTestId)).toBeVisible();
    expect(getByTestId(defaultCardParams.rightHeaderTestId)).toHaveTextContent(defaultCardParams.rightHeader);
    expect(getByTestId(defaultCardParams.rightBodyTestId)).toBeVisible();
    expect(getByTestId(defaultCardParams.rightBodyTestId)).toHaveTextContent(defaultCardParams.rightBody);
  });

  it('should not be tappable when disabled', () => {
    const {getByTestId} = render(
      <TwoColumnedWithMediaCardComponent testID={twoColumnedWithMediaCardTestId} isDisabled={true} />,
    );

    expect(getByTestId(twoColumnedWithMediaCardTestId)).toBeDisabled();
  });

  it('should be able to override default styling', () => {
    const newStyles = {
      marginVertical: 100,
      paddingHorizontal: 200,
      backgroundColor: 'orange',
    };

    render(<TwoColumnedWithMediaCardComponent testID={twoColumnedWithMediaCardTestId} {...newStyles} />);

    const twoColumnedWithMediaCardComponent = screen.getByTestId(twoColumnedWithMediaCardTestId);

    expect(twoColumnedWithMediaCardComponent).not.toHaveStyle({
      paddingLeft: spacing['s-36'],
      backgroundColor: color.background.white,
    });
    expect(twoColumnedWithMediaCardComponent).toHaveStyle({...newStyles});
  });
});
