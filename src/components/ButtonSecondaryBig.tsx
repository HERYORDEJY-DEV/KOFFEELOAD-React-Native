import * as React from 'react';
import * as RN from 'react-native';
import { Primary } from '../styles/colorPallete';

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
    borderRadius: 10,
    minHeight: 52,
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: { color: '#000000' },
});
