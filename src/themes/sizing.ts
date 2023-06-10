import {FontSizeTypes} from './types';
import {getFontSize} from './utils';

const font: Record<FontSizeTypes, number> = {
  xs: getFontSize(4),
  sm: getFontSize(5),
  md: getFontSize(6),
  lg: getFontSize(7),
  xl: getFontSize(8),
  '2xl': getFontSize(9),
  '3xl': getFontSize(10),
  '4xl': getFontSize(11),
  '5xl': getFontSize(12),
};

export const sizing = {font};
