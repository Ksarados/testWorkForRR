import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DetailsScreenNavigationProp } from '../navigation/MainNavigator';
import { ShiftsData } from '../types/shifts';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/MainNavigator';

type InformationScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: InformationScreenRouteProp;
};

export function InformationScreen({ route }: Props) {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  console.log('route', route.params.item);

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
