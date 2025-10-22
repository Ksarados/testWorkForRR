import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { ShiftsData } from '../../types/shifts';

export const ShiftDate = ({ item }: { item: ShiftsData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleDate}>Смена: </Text>
      <Text>{item.dateStartByCity} г. </Text>
      <Text>с {item.timeStartByCity}</Text>
      <Text>до {item.timeEndByCity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 20,
  },
  titleDate: {
    fontWeight: '500',
    color: Colors.darkGray,
  },
});
