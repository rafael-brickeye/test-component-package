import {TextStyle, ViewStyle} from 'react-native';
import {defaultTextStyles, defaultViewStyles} from './constants';

type DefaultStyles = ViewStyle | TextStyle;

const MULTIPLE_OF_TWO = 2;
const MULTIPLE_OF_FOUR = 4;

export const generateSpacing = (value: number) => MULTIPLE_OF_FOUR * value;

export const generateSize = (value: number) => MULTIPLE_OF_TWO * value;

export const getFontSize = (value: number) => generateSize(value * 1);

export const getDefaultStylesFromProps = (props: DefaultStyles) => {
  const newProps: Record<string, any> = {};

  for (const validProp in props) {
    const propValue = props[validProp as keyof DefaultStyles];
    const isValidProp = validProp in defaultViewStyles || validProp in defaultTextStyles;

    if (isValidProp) {
      newProps[validProp] = propValue;
    }
  }

  return newProps;
};
