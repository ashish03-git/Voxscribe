import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(102),
  },
  topContainer: {
    // flex: 1,
    alignItems: 'flex-end',
    // backgroundColor:"#FFF7ED"
  },
  registerBtn: {
    margin: responsiveWidth(3),
    // borderBottomLeftRadius: responsiveWidth(4),
    // borderTopRightRadius: responsiveWidth(4),
  },
  registerBtnTxt: {
    fontSize: responsiveFontSize(2),
    color: '#8E4EC6',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 6,
    borderTopRightRadius: responsiveWidth(8),
    borderTopLeftRadius: responsiveWidth(8),
    // elevation: 5,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTxt: {
    fontSize: responsiveFontSize(4.2),
    // fontWeight: 'bold',
  },
  inputFieldContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
  },
  inputField: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    borderRadius: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    backgroundColor: '#F1F4F3',
    paddingHorizontal: responsiveWidth(4),
    // marginVertical: responsiveWidth(3),
  },
  btnStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveWidth(2),
    backgroundColor: '#8E4EC6',
    // elevation: 5,
  },
  disableButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#D3B4ED',
    marginTop: responsiveWidth(3),
  },
  btnTxt: {
    fontSize: responsiveFontSize(2.4),
    // fontWeight: 'bold',
    color: 'white',
  },
  socialIconContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    // backgroundColor:"red"
  },
  icon: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    borderRadius: responsiveWidth(15),
  },
  errorText: {
    fontSize: responsiveFontSize(1.8),
    // marginBottom:responsiveHeight(2),
    color: 'red',
    marginLeft: responsiveHeight(3),
    alignSelf: 'flex-start',
  },
  success: {
    fontSize: responsiveFontSize(1.8),
    color: 'green',
  },
  failure:{
    fontSize: responsiveFontSize(1.8),
    color: 'red',
  }
});

export default styles;
