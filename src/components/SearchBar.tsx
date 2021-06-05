import * as React from 'react';
import * as RN from 'react-native';
import { Primary } from '../styles/colorPallete';
import { BodyIntroText } from '../styles/fontSize';
import { SearchIcon } from '../svg/Searchicon';

interface Props {
  onChange?: (e: {}) => void;
  onChangeText: (e: string) => void;
  containerStyle?: RN.StyleProp<RN.ViewStyle>;
}
interface State {}

export default function SearchBar(props: Props) {
  return (
    <RN.View style={[styles.container, props.containerStyle]}>
      <SearchIcon />
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
    height: 36,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#00000050',
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 12,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {},
});
