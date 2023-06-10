import React from 'react';
import {View} from 'react-native';
import {cleanup, render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import {Typography} from '../Typography';
import {sizing} from '../../../themes';

afterEach(cleanup);

const testText = 'Hello World';
const longTestText = testText.repeat(5);
const testId = 'typography-component';

describe('Base Typography Component', () => {
  it('should match the existing snapshot', () => {
    const testSnapshot = render(<Typography />).toJSON();

    expect(testSnapshot).toMatchSnapshot();
  });

  it('should be able to render child component', () => {
    const {getByTestId} = render(<Typography testID={testId}>{testText}</Typography>);

    expect(getByTestId(testId)).toBeVisible();
    expect(getByTestId(testId)).toHaveTextContent(testText);
  });

  it("should truncate text when it's about to overflow the max content of the parent component and truncateEnd prop is TRUE", () => {
    const {children} = render(
      <View style={{width: 5}}>
        <Typography testID={testId} truncateEnd>
          {longTestText}
        </Typography>
      </View>,
    ).toJSON() as any;

    const typographyProps = children[0]?.props;

    expect(typographyProps).toHaveProperty('numberOfLines', 1);
  });

  it('should be able to use preset styling and override default styling', () => {
    const {getByTestId} = render(
      <Typography testID={testId} fontWeight={'bold'} fontSize={sizing.font['4xl']}>
        {testText}
      </Typography>,
    );

    expect(getByTestId(testId)).not.toHaveStyle({fontSize: sizing.font.md, fontWeight: '500'});
    expect(getByTestId(testId)).toHaveStyle({fontSize: 22, fontWeight: 'bold'});
  });
});
