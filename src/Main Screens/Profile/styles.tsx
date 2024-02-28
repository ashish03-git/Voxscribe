import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../Extra/Colors';

const styles = StyleSheet.create({
  container: {
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(100),
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingHorizontal: responsiveScreenWidth(4),
  },
  userNameContainer: {
    height: responsiveScreenHeight(9),
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  nameTxt: {
    fontSize: responsiveScreenFontSize(5),
    fontWeight: 'bold',
    color: Colors.purple,
  },
  allServicesContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop:responsiveScreenWidth(20)
    // backgroundColor:"red"
  },
  profileItemsContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(96),
    height: responsiveScreenHeight(7),
    borderRadius: responsiveScreenWidth(3),
    marginVertical: responsiveScreenWidth(1),
    backgroundColor: Colors.white,
    elevation: 0.5,
  },
  profileItemIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileItemTitle: {
    flex: 3,
    justifyContent: 'center',
  },
  cheveronIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});

export default styles;
