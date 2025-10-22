import { View, Text, StyleSheet } from 'react-native';
import { ShiftsData } from '../../types/shifts';
import { Colors } from '../../constants/colors';
import { Price } from '../UI/Price';
import { PlanWorkers } from '../ShiftCard/PlanWorkers';
import { ShiftDate } from '../ShiftCard/ShiftDate';
import { DictionaryText } from '../UI/DictionaryText';

type InformationBoardProps = {
  shift: ShiftsData;
};

export const InformationBoard = ({ shift }: InformationBoardProps) => {
  const shiftDateAndTime = `${shift.dateStartByCity} г. с ${shift.timeStartByCity} до ${shift.timeEndByCity}`;
  const planWorkers = `${shift.currentWorkers} / ${shift.planWorkers}`;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <DictionaryText
          textKey='Требуется: '
          textValue={shift.workTypes[0].name}
        />
        <View style={styles.marginHeader} />
        <Price price={shift.priceWorker} />
      </View>
      <DictionaryText textKey='Откликнулось: ' textValue={planWorkers} />
      <DictionaryText textKey='Смена: ' textValue={shiftDateAndTime} />
      <DictionaryText textKey='Работодатель: ' textValue={shift.companyName} />
      <DictionaryText textKey='Адрес: ' textValue={shift.address} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 16,
    flex: 1,
    marginTop: 10,
    borderRadius: 4,
  },
  header: {
    flexDirection: 'row',
  },
  marginHeader: {
    flex: 1,
  },
});
