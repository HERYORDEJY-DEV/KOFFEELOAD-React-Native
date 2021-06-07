import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

import { Primary } from '../../styles/colorPallete';
import Input from '../../components/Input';
import { BodyIntroText } from './../../styles/fontSize';
import ButtonPrimaryBig from './../../components/ButtonPrimaryBig';
import ButtonSecondaryBig from './../../components/ButtonSecondaryBig';
import { AuthContext } from '../../navigation';

interface Props {}

interface State {}

// TODO enhance the logo image quality

export default function LoginPage() {
  // navigation instance
  const navigation = useNavigation();

  // useContext instance
  const { dispatch } = React.useContext(AuthContext);

  // Login function
  function onLogin() {
    dispatch({
      type: 'LOGIN',
      payload: { email: 'test@user.com', password: 'abcd1234' },
    });
  }

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />

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
          onPress={onLogin}
          containerStyle={styles.loginButton}
        />

        {/* OR */}
        <RN.View style={styles.orWrapper}>
          <RN.View style={styles.horizontalLine} />
          <RN.Text style={[BodyIntroText, styles.orText]}>OR</RN.Text>
          <RN.View style={styles.horizontalLine} />
        </RN.View>

        {/* SignUp Email */}
        <ButtonSecondaryBig
          title={'Sign Up with Email'}
          onPress={() => navigation.navigate('CreateAccount')}
        />
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
    padding: normalize(20),
    justifyContent: 'space-between',
    paddingTop: normalize(40),
  },
  content: {},
  contentContainerStyle: {},
  logoWrapper: { alignItems: 'center' },
  formWrapper: { marginTop: normalize(40), flex: 1 },
  emailInputContainer: { marginBottom: normalize(20) },
  forgotWrapper: { alignItems: 'flex-end', marginBottom: normalize(20) },
  forgotText: {},
  loginButton: { elevation: 3 },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(10, 'height'),
  },
  horizontalLine: {
    borderWidth: 1,
    borderColor: Primary(5),
    flex: 1,
  },
  orText: { marginHorizontal: normalize(5) },
  termsWrapper: { alignItems: 'center' },
});
