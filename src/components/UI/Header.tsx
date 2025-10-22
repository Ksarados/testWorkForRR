import { View, Text, StyleSheet, TextInput } from 'react-native';
import FilterIcon from '../../../assets/iconSvg/FilterIcon';
import SearchIcon from '../../../assets/iconSvg/SearchIcon';
import LocationIcon from '../../../assets/iconSvg/LocationIcon';
import ArrowDownIcon from '../../../assets/iconSvg/ArrowDownIcon';
import { Colors } from '../../constants/colors';

type HeaderProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

export const Header = ({ searchText, setSearchText }: HeaderProps) => {
  console.log('Header', FilterIcon);
  return (
    <View style={styles.container}>
      <View style={[styles.whiteView, styles.searchView]}>
        <SearchIcon />
        <TextInput
          style={styles.textInput}
          placeholder='Поиск по должности'
          placeholderTextColor={Colors.darkGray}
          value={searchText}
          onChangeText={setSearchText}
        />
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
    height: 45,
    gap: 4,
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
  textInput: {
    flex: 1,
    color: Colors.black,
    paddingVertical: 0,
  },
});
