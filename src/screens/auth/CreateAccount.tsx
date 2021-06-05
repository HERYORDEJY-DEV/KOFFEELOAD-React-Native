import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';

import { Primary } from '../../styles/colorPallete';
import Input from '../../components/Input';
import { BodyIntroText } from '../../styles/fontSize';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import ButtonSecondaryBig from '../../components/ButtonSecondaryBig';

interface Props {}

interface State {}

// TODO enhance the logo image quality

export default function CreateAccount() {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar backgroundColor={Primary(3)} barStyle={'dark-content'} />

      {/*Logo */}
      <RN.View style={styles.logoWrapper}>
        <RN.Image source={require('../../assets/images/koffee-logo.png')} />
      </RN.View>

      {/* Login Form */}
      <RN.View style={styles.formWrapper}>
        <Input label={'Email'} containerStyle={styles.emailInputContainer} />
        <Input label={'Password'} />

        {/* Forget Password Link */}
        <RN.Pressable style={styles.forgotWrapper}>
          <RN.Text style={[BodyIntroText, styles.forgotText]}>
            Forgot Password?
          </RN.Text>
        </RN.Pressable>

        {/* Login Button */}
        <ButtonPrimaryBig
          title={'Login'}
          onPress={() => {}}
          containerStyle={styles.loginButton}
        />

        {/* OR */}
        <RN.View style={styles.orWrapper}>
          <RN.View style={styles.horizontalLine} />
          <RN.Text style={[BodyIntroText, styles.orText]}>OR</RN.Text>
          <RN.View style={styles.horizontalLine} />
        </RN.View>

        {/* SignUp Email */}
        <ButtonSecondaryBig title={'Sign Up with Email'} onPress={() => {}} />
        <ButtonSecondaryBig title={'Sign Up with Google'} onPress={() => {}} />
      </RN.View>

      {/* Terms & Condition */}
      <RN.Pressable style={styles.termsWrapper}>
        <RN.Text style={BodyIntroText}>
          Terms of Service and Privacy Policy
        </RN.Text>
      </RN.Pressable>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: Primary(3),
    padding: 20,
    justifyContent: 'space-between',
  },
  content: {},
  contentContainerStyle: {},
  logoWrapper: { alignItems: 'center' },
  formWrapper: { marginTop: 20 },
  emailInputContainer: { marginBottom: 20 },
  forgotWrapper: { alignItems: 'flex-end', marginBottom: 20 },
  forgotText: {},
  loginButton: { elevation: 2, margin: 1 },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 18,
    marginVertical: 20,
  },
  horizontalLine: { borderWidth: 1, borderColor: Primary(5), flex: 1 },
  orText: { marginHorizontal: 5 },
  termsWrapper: { alignItems: 'center' },
});
