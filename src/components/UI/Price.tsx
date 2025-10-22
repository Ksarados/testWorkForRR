import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

type PriceProps = {
  price: number;
};

export const Price = ({ price }: PriceProps) => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.price}>
        <Text>до {price} ₽</Text>
      </View>
      <View style={styles.marginPrice} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  price: {
    backgroundColor: Colors.orange,
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  marginPrice: {
    flex: 1,
  },
});
