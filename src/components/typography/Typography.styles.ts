import {StyleSheet} from 'react-native';
import {getDefaultStylesFromProps, sizing, color as themeColor} from '../../themes';

const useStyles = ({...props}) => {
  const styles = getDefaultStylesFromProps(props);

  return StyleSheet.create({
    typographyContainer: {
      fontSize: sizing.font.md,
      fontWeight: 'normal',
      color: themeColor.text.black,
      ...styles,
    },
  });
};

export default useStyles;
