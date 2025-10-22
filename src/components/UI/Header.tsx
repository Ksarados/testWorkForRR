import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FilterIcon from '../../../assets/iconSvg/FilterIcon';
import SearchIcon from '../../../assets/iconSvg/SearchIcon';
import LocationIcon from '../../../assets/iconSvg/LocationIcon';
import ArrowDownIcon from '../../../assets/iconSvg/ArrowDownIcon';
import { Colors } from '../../constants/colors';
import { observer } from 'mobx-react-lite';
import { locationStore } from '../../store/locationStore';

type HeaderProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

export const Header = observer(({ searchText, setSearchText }: HeaderProps) => {
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
      <TouchableOpacity onPress={() => console.log('Выбрать фильтры')}>
        <FilterIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.whiteView}
        onPress={() => console.log('Выбрать город')}
      >
        <LocationIcon />
        <Text>г. {locationStore.city || null}</Text>
        <ArrowDownIcon />
      </TouchableOpacity>
    </View>
  );
});

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
