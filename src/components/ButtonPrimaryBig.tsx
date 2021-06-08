import * as React from 'react';
import * as RN from 'react-native';
import { Primary } from '../styles/colorPallete';

import { RFValue } from 'react-native-responsive-fontsize';
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
    borderRadius: RFValue(10),
    height: RFValue(52),
    justifyContent: 'center',
    marginVertical: RFValue(10),
  },
  title: { color: '#FFFFFF' },
});
