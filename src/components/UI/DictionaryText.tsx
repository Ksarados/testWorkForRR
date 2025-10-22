import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

type PlanWorkersProps = {
  textKey: string;
  textValue: string;
};

export const DictionaryText = ({ textKey, textValue }: PlanWorkersProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleKey}>{textKey}</Text>
      <Text>{textValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  titleKey: {
    fontWeight: '500',
    color: Colors.darkGray,
  },
});
