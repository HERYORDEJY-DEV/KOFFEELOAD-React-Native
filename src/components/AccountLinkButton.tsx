import * as React from 'react';
import * as RN from 'react-native';
import { Primary } from '../styles/colorPallete';

import normalize from 'react-native-normalize';
import { RFValue } from 'react-native-responsive-fontsize';

import { BodyIntroText } from '../styles/fontSize';
import { ChevronRight } from '../svg/ArrowIcons';

interface Props {
  title: string;
  leftIcon: React.ReactNode;
  onPress: () => void;
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}

interface State {}

export default function AccountLinkButton(props: Props) {
  return (
    <RN.Pressable
      style={[styles.container, props.containerStyle]}
      android_ripple={{ color: Primary(3) }}
      onPress={props.onPress}
    >
      {props.leftIcon}
      <RN.Text style={[BodyIntroText, styles.title]}>{props.title}</RN.Text>
      <ChevronRight width={RFValue(10)} height={RFValue(10)} />
    </RN.Pressable>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: RFValue(10),
    height: RFValue(44),
    marginBottom: RFValue(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000050',
    paddingHorizontal: RFValue(20),
  },
  title: {
    color: '#000000',
    fontFamily: 'OpenSans-Bold',
    fontSize: RFValue(12),
    flex: 1,
    marginLeft: RFValue(20),
  },
});
