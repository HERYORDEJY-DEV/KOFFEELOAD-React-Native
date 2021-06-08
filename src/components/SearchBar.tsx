import * as React from 'react';
import * as RN from 'react-native';

import { BodyIntroText } from '../styles/fontSize';
import { SearchIcon } from '../svg/Searchicon';
import normalize from 'react-native-normalize';
import { RFValue } from 'react-native-responsive-fontsize';

import { Primary } from '../styles/colorPallete';

interface Props {
  onChange?: (e: {}) => void;
  onChangeText: (e: string) => void;
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}
interface State {}

export default function SearchBar(props: Props) {
  return (
    <RN.View style={[styles.container, props.containerStyle]}>
      <SearchIcon width={RFValue(16)} height={RFValue(16)} />
      <RN.TextInput
        style={[BodyIntroText, styles.textInput]}
        inlineImageLeft={'search'}
        placeholder={'Search'}
        placeholderTextColor={Primary(2)}
      />
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: RFValue(36),
    borderRadius: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: RFValue(20),
    borderWidth: 1,
    borderColor: '#00000050',
    overflow: 'hidden',
  },
  textInput: {
    marginLeft: RFValue(10),
    flex: 1,
    fontSize: RFValue(12),
    height: RFValue(36),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {},
});
