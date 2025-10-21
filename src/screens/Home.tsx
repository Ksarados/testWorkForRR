import { StyleSheet, FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { shiftsStore } from '../store/shiftsStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShiftCard } from '../components/ShiftCard/ShiftCard';
import { Colors } from '../constants/colors';

export default observer(function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shiftsStore.shifts}
        renderItem={(item) => <ShiftCard item={item.item} />}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
    padding: 16,
  },
});
