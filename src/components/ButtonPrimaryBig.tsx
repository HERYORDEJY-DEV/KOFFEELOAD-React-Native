import * as React from 'react';
import * as RN from 'react-native';
import { Primary } from '../styles/colorPallete';

import { BodyIntroText } from '../styles/fontSize';
import normalize from 'react-native-normalize';

interface Props {
  title: string;
  onPress: () => void;
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}

interface State {}

export default function ButtonPrimaryBig(props: Props) {
  return (
    <RN.Pressable
      style={[styles.container, props.containerStyle]}
      android_ripple={{ color: Primary(4) }}
      onPress={props.onPress}
    >
      <RN.Text style={[BodyIntroText, styles.title]}>{props.title}</RN.Text>
    </RN.Pressable>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: Primary(1),
    alignItems: 'center',
    borderRadius: normalize(10),
    height: normalize(52, 'height'),
    justifyContent: 'center',
    marginVertical: normalize(10, 'height'),
  },
  title: { color: '#FFFFFF' },
});
