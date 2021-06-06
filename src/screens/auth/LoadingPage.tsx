import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Primary } from '../../styles/colorPallete';
import Input from '../../components/Input';
import { BodyIntroText } from './../../styles/fontSize';
import ButtonPrimaryBig from './../../components/ButtonPrimaryBig';
import ButtonSecondaryBig from './../../components/ButtonSecondaryBig';
import { AuthContext } from '../../navigation';

interface Props {}

interface State {}

// TODO enhance the logo image quality

export default function LoadingPage() {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={true}
      />

      {/*Logo */}
      <RN.View style={styles.logoWrapper}>
        <RN.Image source={require('../../assets/images/koffee-logo.png')} />
      </RN.View>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: Primary(3),
    padding: 20,
    justifyContent: 'center',
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  logoWrapper: {},
});
