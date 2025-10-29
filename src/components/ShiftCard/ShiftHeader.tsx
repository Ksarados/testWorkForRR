import { Image, Text, View, StyleSheet } from 'react-native';
import { ShiftsData } from '../../types/shifts';
import { Price } from '../UI/Price';
import { DictionaryText } from '../UI/DictionaryText';

export const ShiftHeader = ({ item }: { item: ShiftsData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header} numberOfLines={2} ellipsizeMode='tail'>
          {item.workTypes[0].name}
        </Text>
        <DictionaryText
          textKey='Откликнулось: '
          textValue={`${item.currentWorkers} / ${item.planWorkers}`}
          styleProps={styles.text}
        />
        <Price price={item.priceWorker} />
      </View>
      {item.logo && (
        <Image
          source={{ uri: item.logo }}
          style={styles.logo}
          resizeMode='contain'
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  text: {
    marginVertical: 10,
  },
});
