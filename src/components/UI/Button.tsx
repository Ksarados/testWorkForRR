import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.orange,
    paddingHorizontal: 30,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
  },
  text: {
    color: Colors.black,
    textAlign: 'center',
  },
});
