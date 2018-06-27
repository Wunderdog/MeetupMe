import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = EStyleSheet.create({
  root: {
    flex: 1

  },
  titleContainer: {
    flex: 0.1,
    height: 10,
    width: 100,
    backgroundColor: 'black'
  },
  title: {
    color: '$whiteColor',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: wp('2.5%'),
    alignSelf: 'flex-start',
    fontSize: 25,
    fontFamily: 'montserratBold'
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '$blackBlueColor'
  },
  meetupCard: {
    height: 200,
    width: 175,
    marginHorizontal: wp('.2%') * 10,
    backgroundColor: '#f73859'

  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative'
  },
  meetupCardTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: '5%',
    left: '4%',
    fontFamily: 'montserratBold'
  },
  meetupCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%'
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat'
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight'
  }
});

export default styles;
