import {StyleSheet} from 'react-native';

import colors from '../config/colors';

export default ViewStyles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingVertical: 12,
    borderColor: colors.primary,
    borderWidth: 1,
    marginVertical: 6,
    backgroundColor: colors.primary,
  },
  containerOutline: {
    borderRadius: 5,
    paddingVertical: 12,
    borderColor: colors.primary,
    borderWidth: 1,
    marginVertical: 6,
    backgroundColor: 'transparent',
  },
  text: {color: colors.white, alignSelf: 'center', fontSize: 18},
  textOutline: {color: colors.primary, alignSelf: 'center', fontSize: 18},
  profileImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: colors.white,
    shadowOpacity: 0.8,
    shadowColor: colors.black,
    margin: 10,
  },
  productImage: {
    borderRadius: 5,
    height: 120,
    width: 120,
    borderWidth: 1,
    borderColor: colors.white,
    shadowOpacity: 0,
    shadowColor: 'transparent',
    margin: 10,
  },
  productCard: {
    margin: 15,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  productCardDark: {
    margin: 15,
    flexDirection: 'row',
    backgroundColor: '#363636',
  },
  name: {
    fontWeight: 'bold',
  },
  name1: {
    fontWeight: 'bold',
    marginLeft: 7,
  },
  nameDark: {
    fontWeight: 'bold',
    color: colors.white,
  },
  name1Dark: {
    fontWeight: 'bold',
    marginLeft: 7,
    color: colors.white,
  },
});
