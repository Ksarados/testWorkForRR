import { View, Text, Image, StyleSheet } from 'react-native';
import { ShiftsData } from '../../types/shifts';
import { Colors } from '../../constants/colors';
import { Price } from '../UI/Price';
import { DictionaryText } from '../UI/DictionaryText';
import StarIcon from '../../../assets/iconSvg/StarIcon';
import { FeedBack } from '../FeedBack/FeedBack';
import { Button } from '../UI/Button';

type InformationBoardProps = {
  shift: ShiftsData;
};

export const InformationBoard = ({ shift }: InformationBoardProps) => {
  const shiftDateAndTime = `${shift.dateStartByCity} г. с ${shift.timeStartByCity} до ${shift.timeEndByCity}`;
  const planWorkers = `${shift.currentWorkers} / ${shift.planWorkers}`;
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.textWorker}>
          <DictionaryText
            textKey='Требуется:'
            textValue={shift.workTypes[0].nameOne}
            styleProps={styles.marginText}
          />
        </View>
      </View>
      <DictionaryText
        textKey='Откликнулось:'
        textValue={planWorkers}
        styleProps={styles.marginTextPlan}
      />
      <DictionaryText
        textKey='Смена:'
        textValue={shiftDateAndTime}
        styleProps={styles.marginText}
      />
      <DictionaryText
        textKey='Работодатель:'
        textValue={shift.companyName}
        styleProps={styles.marginText}
      />
      <DictionaryText
        textKey='Адрес: '
        textValue={shift.address}
        styleProps={styles.marginText}
      />
      <View style={styles.priceView}>
        <Price price={shift.priceWorker} />
      </View>
      <View style={[styles.header, styles.feedBack]}>
        <View style={styles.marginHeader}>
          <Text style={styles.retingTitle}>
            Отзывы о работодателе {'\n'} {shift.companyName}
          </Text>
          <View style={styles.ratingView}>
            <StarIcon width={24} height={24} fill={Colors.orangeDark} />
            <Text>
              {shift.customerRating} ({shift.customerFeedbacksCount})
            </Text>
          </View>
        </View>
        <Image
          style={styles.logo}
          source={shift.logo ? { uri: shift.logo } : undefined}
        />
      </View>
      <FeedBack worked={shift.workTypes[0].nameOne} />
      <View style={styles.marginHeader} />
      <Button
        title='Откликнуться'
        onPress={() => console.log('Вы откликнулись')}
      />
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
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 0,
  },
  textWorker: {
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  marginHeader: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  retingTitle: {
    fontSize: 16,
    fontWeight: '500',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  ratingView: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    gap: 5,
    marginTop: 14,
  },
  marginText: {
    marginBottom: 16,
  },
  marginTextPlan: {
    marginBottom: 16,
    marginTop: 6,
  },
  feedBack: {
    marginTop: 48,
    marginBottom: 10,
  },
  priceView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
