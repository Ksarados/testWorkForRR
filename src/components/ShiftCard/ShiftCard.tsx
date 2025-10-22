import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/MainNavigator';
import { ShiftsData } from '../../types/shifts';
import { Colors } from '../../constants/colors';
import { ShiftHeader } from './ShiftHeader';
import StarIcon from '../../../assets/iconSvg/StarIcon';

export const ShiftCard = ({ item }: { item: ShiftsData }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  console.log('svg', StarIcon);

  return (
    <TouchableOpacity
      style={[styles.container, styles.shadow]}
      onPress={() => navigation.navigate('Details')}
    >
      <ShiftHeader item={item} />
      <View style={styles.shiftDateView}>
        <Text style={styles.titleDate}>Смена: </Text>
        <Text>{item.dateStartByCity} г. </Text>
        <Text>с {item.timeStartByCity}</Text>
        <Text>до {item.timeEndByCity}</Text>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>{item.companyName}</Text>
        <Text style={styles.footerText}>{item.address}</Text>
        <View style={styles.ratingView}>
          <StarIcon width={24} height={24} fill={Colors.orangeDark} />
          <Text>{item.customerRating}</Text>
          <Text>({item.customerFeedbacksCount})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 10,
  },
  shiftDateView: {
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 20,
  },
  titleDate: {
    fontWeight: '500',
    color: Colors.darkGray,
  },
  footerView: {
    backgroundColor: Colors.lightOrange,
    paddingVertical: 5,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  footerText: {
    marginHorizontal: 20,
    paddingVertical: 5,
  },
  ratingView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    gap: 5,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.41,
    elevation: 2,
  },
});
