import * as RN from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import normalize from 'react-native-normalize';

export const Heading1: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'PD-Bold',
  fontStyle: 'normal',
  fontSize: RFValue(28.11),
  lineHeight: RFValue(42.17),
  color: '#000000',
};

export const Heading2: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'PD-Bold',
  fontStyle: 'normal',
  fontSize: RFValue(24),
  lineHeight: RFValue(31.2),
  color: '#000000',
};

export const Heading3: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'PD-Bold',
  fontStyle: 'normal',
  fontSize: RFValue(14),
  lineHeight: RFValue(21),
  color: '#000000',
};

export const Heading4: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'PD-Bold',
  fontStyle: 'normal',
  fontSize: RFValue(12),
  lineHeight: RFValue(18),
  color: '#000000',
};

export const BodyIntroText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-Bold',
  fontStyle: 'normal',
  fontSize: RFValue(12),
  lineHeight: RFValue(18),
  color: '#000000',
};

export const BodyMainText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-SemiBold',
  fontStyle: 'normal',
  fontSize: RFValue(8),
  lineHeight: RFValue(11.16),
  color: '#000000',
};

export const MediumText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-Regular',
  fontStyle: 'normal',
  fontSize: RFValue(7.96),
  lineHeight: RFValue(11.95),
  color: '#000000',
};

export const CaptionText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-Regular',
  fontStyle: 'normal',
  fontSize: RFValue(7.03),
  lineHeight: RFValue(11.24),
  color: '#000000',
};

export const SmallText: RN.StyleProp<RN.TextStyle> = {
  fontFamily: 'OpenSans-Regular',
  fontStyle: 'normal',
  fontSize: RFValue(6.09),
  lineHeight: RFValue(9.14),
  color: '#000000',
};
