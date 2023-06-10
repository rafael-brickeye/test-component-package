import React from 'react';
import {ViewStyle} from 'react-native';
import {DefaultCard, DefaultCardPropTypes} from '../Default';
import {color, spacing} from '../../../../themes';
import {Typography} from '../../../typography';

export type BasicCardPropTypes = {
  type: 'basic';
  header: string;
  headerTestId?: string;
  body: string;
  bodyTestId?: string;
};

const BasicCard: React.FC<BasicCardPropTypes & DefaultCardPropTypes> = ({
  body,
  header,
  headerTestId,
  bodyTestId,
  style: styleProps,
  ...props
}) => {
  return (
    <DefaultCard
      paddingVertical={spacing['s-16']}
      paddingLeft={spacing['s-36']}
      paddingRight={spacing['s-16']}
      style={{...(styleProps as ViewStyle)}}
      {...props}>
      <Typography truncateEnd testID={headerTestId} fontWeight={'bold'} marginBottom={4}>
        {header}
      </Typography>
      <Typography testID={bodyTestId} color={color.text.grey}>
        {body}
      </Typography>
    </DefaultCard>
  );
};

export {BasicCard};
