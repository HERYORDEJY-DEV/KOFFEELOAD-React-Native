import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';
import { RFValue } from 'react-native-responsive-fontsize';

import { Primary } from '../../styles/colorPallete';
import { Heading2, Heading3 } from '../../styles/fontSize';
import AccountLinkButton from '../../components/AccountLinkButton';
import {
  Orders,
  PendingOrders,
  SavedOrders,
  RecentlyViewed,
  AccountSettings,
  PaymentMethod,
  Security,
} from '../../svg/AccountIcons';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import { AuthContext } from '../../navigation';

interface Props {}

interface State {}

export default function Account(props: Props) {
  // navigation instance
  const navigation = useNavigation();

  // useContext instance
  const { dispatch } = React.useContext(AuthContext);

  // Logout function
  function onLogout() {
    dispatch({
      type: 'LOGOUT',
    });
  }

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />

      {/* Header */}
      <RN.View style={styles.headerWrapper}>
        <RN.Text style={[Heading2, styles.headerTitle]}>Account</RN.Text>
        <RN.Text style={[Heading3, styles.headerSubtitle]}>
          Welcome Adedire
        </RN.Text>
      </RN.View>

      {/* Content */}
      <NB.Content
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {/* My Coffee Account section */}
        <RN.View style={[styles.sectionWrapper]}>
          <RN.Text style={[Heading3, styles.sectionTitle]}>
            My Coffee Account
          </RN.Text>
          <AccountLinkButton
            title={'Orders'}
            leftIcon={<Orders width={RFValue(18)} height={RFValue(17.83)} />}
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Pending Orders'}
            leftIcon={
              <PendingOrders width={RFValue(19)} height={RFValue(19)} />
            }
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Saved Orders'}
            leftIcon={<SavedOrders width={RFValue(17)} height={RFValue(17)} />}
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Recently Viewed'}
            leftIcon={
              <RecentlyViewed width={RFValue(17)} height={RFValue(13.91)} />
            }
            onPress={() => {}}
          />
        </RN.View>

        {/* My Settings section */}
        <RN.View style={styles.sectionWrapper}>
          <RN.Text style={[Heading3, styles.sectionTitle]}>My Settings</RN.Text>
          <AccountLinkButton
            title={'My Account Settings'}
            leftIcon={
              <AccountSettings width={RFValue(15)} height={RFValue(16)} />
            }
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Payment Method'}
            leftIcon={
              <PaymentMethod width={RFValue(19)} height={RFValue(19)} />
            }
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Security'}
            leftIcon={<Security width={RFValue(16)} height={RFValue(18.96)} />}
            onPress={() => {}}
          />
        </RN.View>

        {/* Log Out Button */}
        <ButtonPrimaryBig
          title={'Log Out'}
          onPress={onLogout}
          containerStyle={styles.logoutButton}
        />
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: RFValue(20), flex: 0.8 },
  contentContainerStyle: {
    paddingTop: RFValue(30),
    paddingBottom: RFValue(20),
  },
  headerWrapper: {
    backgroundColor: Primary(2),
    paddingVertical: RFValue(10),
    // flex: 0.11,
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(30),
    height: RFValue(125),
  },
  headerTitle: {},
  headerSubtitle: {},
  sectionWrapper: { marginBottom: RFValue(10) },
  sectionTitle: { marginBottom: RFValue(10) },
  logoutButton: { marginHorizontal: RFValue(20), elevation: 3 },
});
