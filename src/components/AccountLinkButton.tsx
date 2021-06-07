import * as React from 'react';
import * as RN from 'react-native';
import { Primary } from '../styles/colorPallete';

import normalize from 'react-native-normalize';

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
      <ChevronRight
        width={normalize(10, 'width')}
        height={normalize(10, 'width')}
      />
    </RN.Pressable>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(10),
    height: normalize(44, 'height'),
    marginBottom: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000050',
    paddingHorizontal: normalize(20),
  },
  title: {
    color: '#000000',
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(12),
    flex: 1,
    marginLeft: normalize(20),
  },
});
