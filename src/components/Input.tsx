import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import normalize from 'react-native-normalize';
import { BodyIntroText } from '../styles/fontSize';

interface Props {
  label?: string;
  onChangeText?: () => void;
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}

interface State {}

export default function Input(props: Props) {
  return (
    <RN.View style={[styles.inputContainer, props.containerStyle]}>
      <RN.Text style={[BodyIntroText, styles.label]}>{props.label}</RN.Text>
      <RN.TextInput
        style={[styles.textInput]}
        onChangeText={props.onChangeText}
      />
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  inputContainer: {
    marginBottom: RFValue(10),
  },
  label: { marginBottom: RFValue(5) },
  textInput: {
    borderRadius: RFValue(10),
    backgroundColor: '#FFFFFF',
    height: RFValue(52),
    fontFamily: 'OpenSans-Regular',
    fontSize: RFValue(15),
    margin: 0,
  },
});
