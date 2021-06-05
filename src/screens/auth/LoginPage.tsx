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
    padding: 20,
    justifyContent: 'space-between',
    paddingTop: 50,
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
