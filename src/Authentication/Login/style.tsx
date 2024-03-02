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
    // borderBottomLeftRadius: responsiveWidth(4),
    // borderTopRightRadius: responsiveWidth(4),
  },
  registerBtnTxt: {
    fontSize: responsiveFontSize(2),
    color: '#8E4EC6',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 5,
    // borderTopRightRadius: responsiveWidth(8),
    // borderTopLeftRadius: responsiveWidth(8),
    // elevation: 5,
  },
  logoContainer: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTxt: {
    fontSize: responsiveFontSize(4.2),
    // fontWeight: 'bold',
  },
  inputField: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    borderRadius: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    backgroundColor: '#F1F4F3',
    paddingHorizontal: responsiveWidth(4),
    marginVertical: responsiveWidth(3),
    // marginBottom: 0,
  },
  btnStyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#8E4EC6',
    marginTop: responsiveWidth(3),
    // elevation: 5,
  },
  btnTxt: {
    fontSize: responsiveFontSize(2.4),
    // fontWeight: 'bold',
    color: 'white',
  },
  disableButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(6.5),
    borderRadius: responsiveWidth(2),
    backgroundColor: '#D3B4ED',
    marginTop: responsiveWidth(3),
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
  errorText:{
    fontSize: responsiveFontSize(1.8),
    // marginBottom:responsiveHeight(2),
    color: 'red',
    marginLeft: responsiveHeight(3),
    alignSelf: 'flex-start',
  }
});

export default styles;
