import React from 'react';
import {View as NativeView, ViewProps as NativeViewProps, ViewStyle as NativeViewStyle} from 'react-native';
import useStyles from './View.styles';

const View: React.FC<NativeViewProps & NativeViewStyle> = ({children, style: styleProps, ...props}) => {
  const style = useStyles({...props});

  return (
    <NativeView style={{...style.viewContainer, ...(styleProps as NativeViewStyle)}} {...props}>
      {children}
    </NativeView>
  );
};

export {View};
