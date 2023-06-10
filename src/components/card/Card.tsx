import React from 'react';
import {
  DefaultCard,
  DefaultCardPropTypes,
  BasicCardPropTypes,
  BasicCard,
  TwoColumnedWithMediaCard,
  TwoColumnedWithMediaCardPropTypes,
} from './card-types';

export type CardTypes = BasicCardPropTypes | TwoColumnedWithMediaCardPropTypes;

const Card: React.FC<CardTypes & DefaultCardPropTypes> = ({children, ...props}) => {
  switch (props.type) {
    case 'basic': {
      return <BasicCard {...props} />;
    }
    case 'two-columned-with-media': {
      return <TwoColumnedWithMediaCard {...props} />;
    }
    default: {
      return <DefaultCard {...(props as DefaultCardPropTypes)}>{children}</DefaultCard>;
    }
  }
};

export {Card};
