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
    backgroundColor: 'white',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1.5,
  },
  nameText: {
    fontSize: responsiveScreenFontSize(3.5),
    color: Colors.purple,
    margin: responsiveScreenWidth(2),
    fontWeight: 'bold',
  },
  numberText: {
    fontSize: responsiveScreenFontSize(2.5),
    color: 'black',
  },
  callOptionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  disconnectCallContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  hangupBtn: {
    width: responsiveScreenWidth(90),
    height: responsiveScreenHeight(7),
    borderRadius: responsiveScreenWidth(10),
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
