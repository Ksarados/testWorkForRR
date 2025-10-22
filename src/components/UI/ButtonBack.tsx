import { TouchableOpacity, StyleSheet } from 'react-native';
import ArrowBackIcon from '../../../assets/iconSvg/ArrowBackIcon';
import { Colors } from '../../constants/colors';

type ButtonBackProps = {
  onPress: () => void;
};

export const ButtonBack = ({ onPress }: ButtonBackProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ArrowBackIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
