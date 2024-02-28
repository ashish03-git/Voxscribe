import {StyleSheet} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../Extra/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingHorizontal: responsiveWidth(4),
  },
  openDialerContainer: {
    flex: 6,
    alignItems: 'center',
  },
  closeDialerContainer: {
    flex: 13,
    alignItems: 'center',
  },
  speedDial: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.purple,
  },
  inputContainer: {
    flex: 1,
    flexDirection:"row",
    marginHorizontal:responsiveWidth(3),
    marginBottom:responsiveWidth(4),
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  dialedNumberTxt: {
    fontSize: responsiveScreenFontSize(6),
  },
  dialerContainer: {
    flex: 5,
    width: responsiveScreenWidth(100),
    padding: responsiveScreenWidth(2),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    // backgroundColor: "#F1F3F5",
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(8),
    // borderRadius:responsiveScreenWidth(20),
    borderRadius: responsiveScreenWidth(3),
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(8),
    // borderRadius:responsiveScreenWidth(20),
    borderRadius: responsiveScreenWidth(3),
  },
  callButton: {
    // backgroundColor: Colors.purple,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveScreenWidth(30),
    height: responsiveScreenHeight(8),
    // borderRadius:responsiveScreenWidth(20),
    borderRadius: responsiveScreenWidth(3),
  },
  buttonText: {
    color: Colors.purple,
    fontWeight: '700',
    fontSize: responsiveScreenFontSize(3.8),
  },

  contactListContainer: {
    flexDirection: 'row',
    elevation: 1,
    width: responsiveWidth(94),
    height: responsiveHeight(9),
    marginVertical: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    backgroundColor: 'white',
  },
  contactProfileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactDetailsContainer: {
    flex: 2,
    paddingLeft: responsiveWidth(2),
    justifyContent: 'center',
    // alignItems:"center"
  },
  callDetailsContainer: {
    flex: 1.5,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  callTimingDetailsTxt: {
    fontSize: responsiveFontSize(1.6),
  },
  contactNameTxt: {
    fontSize: responsiveScreenFontSize(2.3),
    color: 'black',
    fontWeight: 'bold',
  },
  selectContactContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});

export default styles;
