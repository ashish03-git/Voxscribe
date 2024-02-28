import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../Extra/Colors';

const styles = StyleSheet.create({
  constainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingHorizontal: responsiveWidth(4),
  },
  selectedContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  searchInput: {
    width: responsiveWidth(78),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(3),
    borderWidth: 1,
  },
  availableContactsContainer: {
    flex: 8,
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  contactListContainer: {
    flexDirection: 'row',
    elevation: 1,
    width: responsiveWidth(96),
    height: responsiveHeight(10),
    marginVertical: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    backgroundColor: 'white',
  },
  contactProfileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  contactDetailsContainer: {
    flex: 3,
    paddingLeft: responsiveWidth(2),
    justifyContent: 'center',
  },
  contactNameTxt: {
    fontSize: responsiveScreenFontSize(2.3),
    color: 'black',
    fontWeight: 'bold',
  },
  selectContactContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  continueBtnContainer: {
    flex: 2,
    paddingTop: responsiveWidth(4),
    alignItems: 'center',
  },
  continueBtn: {
    width: responsiveWidth(94),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(10),
    backgroundColor: Colors.purple,
  },
  continueBtnTxt: {
    fontSize: responsiveFontSize(2.5),
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
