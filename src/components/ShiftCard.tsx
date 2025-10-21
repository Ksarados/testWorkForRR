import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/MainNavigator';
import { ShiftsData } from '../types/shifts';

export const ShiftCard = ({ item }: { item: ShiftsData }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text>{item.workTypes[0].name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>Откликнулось: </Text>
            <Text>{item.currentWorkers} / </Text>
            <Text>{item.planWorkers}</Text>
          </View>

          <Text>до {item.priceWorker} ₽</Text>
        </View>
        <Image
          source={item.logo ? { uri: item.logo } : undefined}
          style={styles.logo}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Смена: </Text>
        <Text>{item.dateStartByCity} г. </Text>
        <Text>с {item.timeStartByCity}</Text>
        <Text>до {item.timeEndByCity}</Text>
      </View>
      <View style={{ backgroundColor: '#FFF4E6' }}>
        <Text>{item.address}</Text>
        <Text>{item.companyName}</Text>

        <View style={{ flexDirection: 'row' }}>
          <Text>{item.customerRating}</Text>
          <Text> ({item.customerFeedbacksCount})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});
