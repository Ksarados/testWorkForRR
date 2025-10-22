import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { shiftsStore } from '../store/shiftsStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShiftCard } from '../components/ShiftCard/ShiftCard';
import { Colors } from '../constants/colors';
import { Header } from '../components/UI/Header';

export default observer(function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [filteredShifts, setFilteredShifts] = useState(shiftsStore.shifts);

  useEffect(() => {
    const filteredShiftsEffect = shiftsStore.shifts.filter((shift) =>
      shift.workTypes[0].name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredShifts(filteredShiftsEffect);
  }, [searchText, shiftsStore.shifts]);
  return (
    <SafeAreaView style={styles.container}>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <FlatList
        data={filteredShifts}
        renderItem={(item) => <ShiftCard item={item.item} />}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 16,
  },
});
