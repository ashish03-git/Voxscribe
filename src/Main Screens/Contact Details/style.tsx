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
    flex: 2,
    // backgroundColor: 'red',
    // borderBottomEndRadius: responsiveScreenHeight(5),
    // borderBottomLeftRadius: responsiveScreenHeight(5),
  },
  headerContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingHorizontal: responsiveScreenWidth(4),
  },
  photoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  nameText: {
    fontSize: responsiveScreenFontSize(3),
    fontWeight: 'bold',
    margin: responsiveScreenWidth(2),
  },
  numberText: {
    fontSize: responsiveScreenFontSize(2),
  },
  midContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  bottomContainer: {
    flex: 3,
    // backgroundColor: 'purple',
  },
  callHistory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(3),
  },
  callHistoryText: {
    fontSize: responsiveScreenFontSize(2.2),
    color: 'black',
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: responsiveScreenFontSize(2),
    color: Colors.purple,
  },
  historyListContainer: {
    flex: 8,
    alignItems: 'center',
  },
  historyItemContainer: {
    flexDirection: 'row',
    width: responsiveScreenWidth(92),
    // backgroundColor:"red",
    height: responsiveScreenHeight(6),
    marginVertical: responsiveScreenWidth(2),
  },
  callIndicator: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  callDetails: {
    flex: 3,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  incomingText: {
    fontSize: responsiveScreenFontSize(2.1),
    color: 'black',
  },
  missedCallText:{
    fontSize: responsiveScreenFontSize(2.1),
    color: 'red',
  },
  incomingNumberText: {
    fontSize: responsiveScreenFontSize(1.8),
    color: 'gray',
  },
  callTiming: {
    flex: 2,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  callTimingText:{
    fontSize:responsiveScreenFontSize(1.8),
  }
});

export default styles;
