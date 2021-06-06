import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Primary } from '../../styles/colorPallete';
import Input from '../../components/Input';
import { BodyIntroText, Heading2 } from '../../styles/fontSize';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import ButtonSecondaryBig from '../../components/ButtonSecondaryBig';
import LoadingPage from './LoadingPage';

interface Props {}

interface State {}

// TODO enhance the logo image quality

export default function CreateAccount() {
  // navigation instance
  const navigation = useNavigation();

  // loadingPage state
  const [loadingPage, setLoadingPage] = React.useState(true);

  // Loading page timeout
  React.useEffect(() => {
    setTimeout(() => setLoadingPage(false), 3000);
  }, []);

  if (loadingPage) {
    return <LoadingPage />;
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
        {/* Heading Text */}
        <RN.Text style={Heading2}>Create an Account</RN.Text>

        {/* Inputs */}
        <RN.View style={styles.inputsWrapper}>
          <Input label={'Name'} />
          <Input label={'Email'} />
          <Input label={'Password'} />
          <Input label={'Confirm Password'} />
        </RN.View>

        {/* Forget Password Link */}
        <RN.Pressable style={styles.forgotWrapper}>
          <RN.Text style={[BodyIntroText, styles.forgotText]}>
            Forgot Password?
          </RN.Text>
        </RN.Pressable>

        {/* Login Button */}
        <ButtonPrimaryBig
          title={'Sign Up'}
          onPress={() => navigation.navigate('LoginPage')}
          containerStyle={styles.loginButton}
        />
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
  formWrapper: { marginTop: 40, flex: 1 },
  inputsWrapper: { marginTop: 20 },
  forgotWrapper: { alignItems: 'flex-end', marginBottom: 20 },
  forgotText: {},
  loginButton: { elevation: 2, margin: 1 },
  termsWrapper: { alignItems: 'center' },
});
