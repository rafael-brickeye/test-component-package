import React from 'react';
import {TouchableHighlight, TouchableHighlightProps, ViewStyle} from 'react-native';
import useStyles from './Default.styles';
import {View} from '../../../view';
import {color} from '../../../../themes';

export type DefaultCardPropTypes = {
  onPress: () => void;
  isDisabled: boolean;
} & TouchableHighlightProps &
  ViewStyle;

const DefaultCard: React.FC<DefaultCardPropTypes> = ({isDisabled, onPress, children, style: styleProps, ...props}) => {
  const style = useStyles({isDisabled, ...props});

  return (
    <TouchableHighlight
      disabled={isDisabled}
      underlayColor={color.surface.grey}
      onPress={onPress}
      style={{...style.cardContainer, ...(styleProps as ViewStyle)}}
      {...props}>
      <View opacity={isDisabled ? 0.5 : 1}>{children}</View>
    </TouchableHighlight>
  );
};

export {DefaultCard};
