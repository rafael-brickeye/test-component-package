import React from 'react';
import {Image, ViewStyle, TextStyle} from 'react-native';
import {DefaultCard, DefaultCardPropTypes} from '../Default';
import {View} from '../../../view';
import {Typography} from '../../../typography';
import {color, sizing} from '../../../../themes';
import placeholderIcon from '../../../../../assets/placeholder/card-placeholder.png';

export type TwoColumnedWithMediaCardPropTypes = {
  type: 'two-columned-with-media';
  image?: any;
  middleHeader: string;
  middleHeaderTruncate?: boolean;
  middleHeaderStyle?: TextStyle;
  middleHeaderTestId?: string;
  middleBody: string;
  middleBodyTruncate?: boolean;
  middleBodyStyle?: TextStyle;
  middleBodyTestId?: string;
  rightHeader: string;
  rightHeaderTruncate?: boolean;
  rightHeaderStyle?: TextStyle;
  rightHeaderTestId?: string;
  rightBody: string;
  rightBodyTruncate?: boolean;
  rightBodyStyle?: TextStyle;
  rightBodyTestId?: string;
};

const TwoColumnedWithMediaCard: React.FC<TwoColumnedWithMediaCardPropTypes & DefaultCardPropTypes> = ({
  image,
  middleHeader,
  middleHeaderStyle,
  middleHeaderTruncate,
  middleHeaderTestId,
  middleBody,
  middleBodyStyle,
  middleBodyTruncate,
  middleBodyTestId,
  rightBody,
  rightBodyStyle,
  rightBodyTruncate,
  rightBodyTestId,
  rightHeader,
  rightHeaderStyle,
  rightHeaderTruncate,
  rightHeaderTestId,
  style: styleProps,
  ...props
}) => {
  return (
    <DefaultCard paddingVertical={16} paddingHorizontal={10} style={{...(styleProps as ViewStyle)}} {...props}>
      <View flexDirection={'row'}>
        <Image style={{width: 40, height: 44}} source={image ?? placeholderIcon} />
        <View marginLeft={6} flex={0.65}>
          <Typography
            truncateEnd={middleHeaderTruncate}
            fontWeight={'500'}
            marginBottom={6}
            testID={middleHeaderTestId}
            {...middleHeaderStyle}>
            {middleHeader}
          </Typography>
          <Typography
            truncateEnd={middleBodyTruncate}
            fontSize={sizing.font.sm}
            fontWeight={'500'}
            color={color.text.grey}
            testID={middleBodyTestId}
            {...middleBodyStyle}>
            {middleBody}
          </Typography>
        </View>
        <View flex={0.35} alignItems={'flex-end'}>
          <Typography
            truncateEnd={rightHeaderTruncate}
            fontSize={sizing.font.xs}
            color={color.text.grey}
            marginBottom={6}
            testID={rightHeaderTestId}
            {...rightHeaderStyle}>
            {rightHeader}
          </Typography>
          <Typography
            truncateEnd={rightBodyTruncate}
            fontSize={sizing.font.sm}
            fontWeight={'500'}
            testID={rightBodyTestId}
            {...rightBodyStyle}>
            {rightBody}
          </Typography>
        </View>
      </View>
    </DefaultCard>
  );
};

export {TwoColumnedWithMediaCard};
