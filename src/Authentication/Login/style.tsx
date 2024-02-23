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
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor:"#FFF7ED"
  },
  registerBtn: {
    margin: responsiveWidth(3),
    borderBottomLeftRadius: responsiveWidth(4),
    borderTopRightRadius: responsiveWidth(4),
  },
  registerBtnTxt: {
    fontSize: responsiveFontSize(2),
    color: '#8E4EC6',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 2,
    borderTopRightRadius: responsiveWidth(8),
    borderTopLeftRadius: responsiveWidth(8),
    elevation: 5,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTxt: {
    fontSize: responsiveFontSize(4.5),
    fontWeight: 'bold',
  },
  inputField: {
    borderRadius: responsiveWidth(3),
    backgroundColor: '#F3F3F3',
    borderColor: '#8E4EC6',
    borderWidth: 1,
  },
  btnStyle: {
    width: responsiveWidth(94),
    height: responsiveHeight(6.5),
    borderRadius: responsiveWidth(10),
    backgroundColor: '#8E4EC6',
    elevation: 5,
  },
  btnTxt: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    color: 'white',
  },
  socialIconContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  icon: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    borderRadius: responsiveWidth(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
