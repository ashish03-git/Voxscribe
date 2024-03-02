import {StyleSheet} from 'react-native';
import Colors from '../../Extra/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  personalDetailsContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 2,
    justifyContent: 'center',
    // backgroundColor: 'red',
    paddingLeft: responsiveWidth(4),
  },
  greetingTxt: {
    fontSize: responsiveFontSize(6),
    fontWeight: '600',
    color: 'black',
  },
  nameTxt: {
    fontSize: responsiveFontSize(6),
    fontWeight: 'bold',
    color: 'black',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    width: responsiveWidth(26),
    height: responsiveWidth(26),
    borderRadius: responsiveWidth(20),
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activateCallContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  activateCall: {
    flex: 1,
    flexDirection: 'row',
    width: responsiveWidth(96),
    borderRadius: responsiveWidth(4),
    elevation: 10,
    backgroundColor: Colors.purple,
  },
  phoneIconContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  activateCallTxtContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  rightArrowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherServicesContainer: {
    flex: 5,
    marginHorizontal:responsiveWidth(2)
    // backgroundColor:"yellow"
  },
  otherContainerOne: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  commonContainer: {
    width: responsiveWidth(45),
    height: responsiveHeight(25),
    borderRadius: responsiveWidth(3),
    // backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherContainerTwo: {
    flex: 1.2,
    alignItems: 'center',
  },
  unlimilatedContainer: {
    flexDirection:"row",
    width: responsiveWidth(92),
    height: responsiveHeight(18),
    borderRadius: responsiveWidth(3),
    // backgroundColor: Colors.white,
  },
});

export default styles;
