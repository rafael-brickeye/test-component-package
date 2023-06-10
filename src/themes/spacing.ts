import {SpacingTypes} from './types';
import {generateSpacing} from './utils';

const spacing: Record<SpacingTypes, number> = {
  's-2': generateSpacing(0.5),
  's-4': generateSpacing(1),
  's-8': generateSpacing(2),
  's-12': generateSpacing(3),
  's-16': generateSpacing(4),
  's-20': generateSpacing(5),
  's-24': generateSpacing(6),
  's-28': generateSpacing(7),
  's-32': generateSpacing(8),
  's-36': generateSpacing(9),
  's-40': generateSpacing(10),
};

export {spacing};
