import * as React from 'react';
import * as RN from 'react-native';
import { Primary } from '../styles/colorPallete';

import normalize from 'react-native-normalize';
import { RFValue } from 'react-native-responsive-fontsize';

import { BodyIntroText } from '../styles/fontSize';

interface Props {
  title: string;
  onPress: () => void;
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}

interface State {}

export default function ButtonSecondaryBig(props: Props) {
  return (
    <RN.Pressable
      style={[styles.container, props.containerStyle]}
      android_ripple={{ color: Primary(3) }}
      onPress={props.onPress}
    >
      <RN.Text style={[BodyIntroText, styles.title]}>{props.title}</RN.Text>
    </RN.Pressable>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: RFValue(10),
    height: RFValue(52),
    justifyContent: 'center',
    marginVertical: RFValue(10),
  },
  title: { color: '#000000' },
});
