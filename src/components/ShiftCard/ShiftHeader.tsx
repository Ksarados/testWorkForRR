import { Image, Text, View, StyleSheet } from 'react-native';
import { ShiftsData } from '../../types/shifts';
import { Price } from '../UI/Price';
import { DictionaryText } from '../UI/DictionaryText';

export const ShiftHeader = ({ item }: { item: ShiftsData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.header}>{item.workTypes[0].name}</Text>
        <DictionaryText
          textKey='Откликнулось: '
          textValue={`${item.currentWorkers} / ${item.planWorkers}`}
        />
        <Price price={item.priceWorker} />
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
});
