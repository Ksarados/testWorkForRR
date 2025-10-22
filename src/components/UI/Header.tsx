import { View, Text, StyleSheet, TextInput } from 'react-native';
import FilterIcon from '../../../assets/iconSvg/FilterIcon';
import SearchIcon from '../../../assets/iconSvg/SearchIcon';
import LocationIcon from '../../../assets/iconSvg/LocationIcon';
import ArrowDownIcon from '../../../assets/iconSvg/ArrowDownIcon';
import { Colors } from '../../constants/colors';

export const Header = () => {
  console.log('Header', FilterIcon);
  return (
    <View style={styles.container}>
      <View style={[styles.whiteView, styles.searchView]}>
        <SearchIcon />
        <TextInput placeholder='Поиск по должности' />
      </View>
      <View>
        <FilterIcon />
      </View>
      <View style={styles.whiteView}>
        <LocationIcon />
        <Text>г. Иваново</Text>
        <ArrowDownIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    gap: 4,
  },
  searchTitle: {
    fontWeight: '200',
    color: Colors.darkGray,
    fontSize: 12,
  },
  whiteView: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    borderRadius: 4,
    paddingHorizontal: 4,
    gap: 4,
  },
  searchView: {
    flex: 1,
  },
});
