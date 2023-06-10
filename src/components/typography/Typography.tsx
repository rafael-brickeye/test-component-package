import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import useStyles from './Typography.styles';

type TextDefaultProps = TextProps & TextStyle;

export type TypographyPropTypes = {
  truncateEnd?: boolean;
} & TextDefaultProps;

const Typography: React.FC<TypographyPropTypes> = ({children, truncateEnd = false, style: styleProps, ...props}) => {
  const style = useStyles({...props});

  return (
    <Text
      numberOfLines={truncateEnd ? 1 : 0}
      style={{...style.typographyContainer, ...(styleProps as TextStyle)}}
      {...props}>
      {children}
    </Text>
  );
};

export {Typography};
