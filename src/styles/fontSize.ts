import * as RN from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
import normalize from 'react-native-normalize';

export const Heading1: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'PD-Bold',
  fontStyle: 'normal',
  fontSize: normalize(28.11),
  lineHeight: normalize(42.17),
  color: '#000000',
};

export const Heading2: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'PD-Bold',
  fontStyle: 'normal',
  fontSize: normalize(24),
  lineHeight: normalize(31.2),
  color: '#000000',
};

export const Heading3: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'PD-Bold',
  fontStyle: 'normal',
  fontSize: normalize(14),
  lineHeight: normalize(21),
  color: '#000000',
};

export const Heading4: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'PD-Bold',
  fontStyle: 'normal',
  fontSize: normalize(12),
  lineHeight: normalize(18),
  color: '#000000',
};

export const BodyIntroText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-Bold',
  fontStyle: 'normal',
  fontSize: normalize(12),
  lineHeight: normalize(18),
  color: '#000000',
};

export const BodyMainText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-SemiBold',
  fontStyle: 'normal',
  fontSize: normalize(8),
  lineHeight: normalize(11.16),
  color: '#000000',
};

export const MediumText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-Regular',
  fontStyle: 'normal',
  fontSize: normalize(7.96),
  lineHeight: normalize(11.95),
  color: '#000000',
};

export const CaptionText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-Regular',
  fontStyle: 'normal',
  fontSize: normalize(7.03),
  lineHeight: normalize(11.24),
  color: '#000000',
};

export const SmallText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-Regular',
  fontStyle: 'normal',
  fontSize: normalize(6.09),
  lineHeight: normalize(9.14),
  color: '#000000',
};
