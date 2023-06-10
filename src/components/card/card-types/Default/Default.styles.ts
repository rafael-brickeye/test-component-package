import {StyleSheet} from 'react-native';
import {color, getDefaultStylesFromProps} from '../../../../themes';

const defaultStyles = {
  minHeight: 68,
  borderRadius: 5,
  backgroundColor: color.background.white,
  ...color.shadow.default,
};

const useStyles = ({...props}) => {
  const styles = getDefaultStylesFromProps(props);

  return StyleSheet.create({
    cardContainer: {
      ...defaultStyles,
      ...styles,
    },
  });
};

export default useStyles;
