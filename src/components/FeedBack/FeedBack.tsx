import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { feedBack } from '../../constants/defaultValues';

export const FeedBack = ({ worked }: { worked: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {feedBack[0].name}, {worked}
      </Text>
      <Text>{feedBack[0].text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Colors.lightOrange,
    borderRadius: 4,
    padding: 16,
  },
  title: {
    fontWeight: '600',
    marginBottom: 8,
  },
});
