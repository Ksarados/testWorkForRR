import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { DetailsScreenNavigationProp } from '../navigation/MainNavigator';
import { RootStackParamList } from '../navigation/MainNavigator';
import { Header } from '../components/UI/Header';
import { ButtonBack } from '../components/UI/ButtonBack';
import { InformationBoard } from '../components/Information/InformationBoard';

type InformationScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: InformationScreenRouteProp;
};

export function InformationScreen({ route }: Props) {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const shift = route.params.item;

  console.log('route', route.params.item);

  return (
    <SafeAreaView style={styles.container}>
      <Header searchText='' setSearchText={() => {}} />
      <View style={styles.subHeader}>
        <ButtonBack onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>{shift.workTypes[0].name}</Text>
        <View style={styles.marginSubHeader} />
      </View>
      <InformationBoard shift={shift} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    paddingHorizontal: 16,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  marginSubHeader: {
    flex: 1,
  },
});
