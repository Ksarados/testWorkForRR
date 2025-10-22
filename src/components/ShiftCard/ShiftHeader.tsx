import { Image, Text, View, StyleSheet } from 'react-native';
import { ShiftsData } from '../../types/shifts';
import { Colors } from '../../constants/colors';

export const ShiftHeader = ({ item }: { item: ShiftsData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.header}>{item.workTypes[0].name}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.workersTitle}>Откликнулось: </Text>
          <Text>{item.currentWorkers} / </Text>
          <Text>{item.planWorkers}</Text>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.price}>
            <Text>до {item.priceWorker} ₽</Text>
          </View>
          <View style={styles.marginPrice} />
        </View>
      </View>
      <Image
        source={item.logo ? { uri: item.logo } : undefined}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  titleView: {
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
  },
  workersTitle: {
    fontWeight: '500',
    color: Colors.darkGray,
  },
  price: {
    backgroundColor: Colors.orange,
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  flexRow: {
    flexDirection: 'row',
  },
  marginPrice: {
    flex: 1,
  },
});
