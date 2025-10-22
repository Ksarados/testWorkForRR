import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

type PlanWorkersProps = {
  textKey: string;
  textValue: string;
  styleProps?: object;
};

export const DictionaryText = ({
  textKey,
  textValue,
  styleProps,
}: PlanWorkersProps) => {
  return (
    <View style={[styles.container, styleProps]}>
      <Text style={styles.titleKey}>{textKey}</Text>
      <Text style={styles.text}>{textValue}</Text>
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
  text: {
    flexShrink: 1,
  },
});
