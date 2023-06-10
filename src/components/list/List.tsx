import React from 'react';
import {ActivityIndicator, FlatList, FlatListProps, ViewStyle} from 'react-native';
import useStyles from './List.styles';
import {color} from '../../themes';

// TODO:
// will need to revisit and update the interface and props of this
// component when pagination is implemented for the Events List API
// and for future API refactors to support data paginations

export type ListPropTypes = {
  isLoading: boolean;
  footerTestId?: string;
} & FlatListProps<any> &
  ViewStyle;

const List: React.FC<ListPropTypes> = ({isLoading, footerTestId, style: styleProps, ...props}) => {
  const style = useStyles({...props});

  return (
    <FlatList
      ListFooterComponent={() => <LoaderComponent footerTestId={footerTestId} isLoading={isLoading} />}
      style={{...style.listContainer, ...(styleProps as ViewStyle)}}
      {...props}
    />
  );
};

const LoaderComponent = ({isLoading, footerTestId}: {footerTestId?: string; isLoading: boolean}) => {
  const {
    brand: {
      protect: {primary},
    },
  } = color;

  if (!isLoading) return null;

  return <ActivityIndicator testID={footerTestId} size={'large'} color={primary.main} />;
};

export {List};
