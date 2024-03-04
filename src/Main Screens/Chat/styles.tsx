import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../Extra/Colors';

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingHorizontal: responsiveScreenWidth(4),
  },
  bodyContainer: {
    flex: 10,
    alignItems: 'center',
  },
  selectedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(3),
  },
  searchInput: {
    width: responsiveWidth(78),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(3),
    borderWidth: 1,
  },
  contactListContainer: {
    flexDirection: 'row',
    elevation: 0.7,
    width: responsiveWidth(96),
    height: responsiveHeight(10),
    marginVertical: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    backgroundColor: 'white',
  },
  contactProfileContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  contactDetailsContainer: {
    flex: 4,
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
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  // chat ui
  chatui_container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(90),
  },
  chatui_name: {
    fontSize: responsiveScreenFontSize(2.4),
    color: 'white',
    fontWeight: 'bold',
  },
  chatui_headerContainer: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.purple,
  },
  chatui_headerUserDetails: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
