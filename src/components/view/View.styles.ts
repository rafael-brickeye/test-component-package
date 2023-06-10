import {StyleSheet} from 'react-native';
import {getDefaultStylesFromProps} from '../../themes';

const useStyles = ({...props}) => {
  const styles = getDefaultStylesFromProps(props);

  return StyleSheet.create({
    viewContainer: {
      ...styles,
    },
  });
};

export default useStyles;
