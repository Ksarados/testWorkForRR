import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { HomeScreenNavigationProp } from '../navigation/MainNavigator';
import { shiftsStore } from '../store/shiftsStore';
import { ShiftsData } from '../types/shifts';
import { SafeAreaView } from 'react-native-safe-area-context';

export default observer(function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const renderItem = ({ item }: { item: ShiftsData }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Image
          source={item.logo ? { uri: item.logo } : undefined}
          style={styles.logo}
        />
        <Text>{item.address}</Text>
        <Text>{item.companyName}</Text>
        <Text>{item.dateStartByCity}</Text>
        <Text>{item.timeStartByCity}</Text>
        <Text>{item.timeEndByCity}</Text>
        <Text>{item.currentWorkers}</Text>
        <Text>{item.planWorkers}</Text>
        <Text>{item.workTypes[0].name}</Text>
        <Text>{item.priceWorker}</Text>
        <Text>{item.customerFeedbacksCount}</Text>
        <Text>{item.customerRating}</Text>
      </TouchableOpacity>
    );
  };

  console.log(shiftsStore.shifts);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={shiftsStore.shifts} renderItem={renderItem} />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
