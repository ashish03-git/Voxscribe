import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../Extra/Colors';

const styles = StyleSheet.create({
  sendButtonContainer: {
    margin:responsiveWidth(4),
    marginLeft:0,
    alignSelf:"center",
    backgroundColor: Colors.purple,
    borderRadius: responsiveWidth(2),
  },
  sendButtonText: {
    fontSize: responsiveFontSize(2.2),
    color: 'white',
  },
});

export default styles;
