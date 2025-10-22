import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DetailsScreenNavigationProp } from '../navigation/MainNavigator';

export function InformationScreen() {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
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
