import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';

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

interface Props {}

interface State {}

export default function Account(props: Props) {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar backgroundColor={Primary(2)} barStyle={'dark-content'} />

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
            leftIcon={<Orders />}
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Pending Orders'}
            leftIcon={<PendingOrders />}
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Saved Orders'}
            leftIcon={<SavedOrders />}
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Recently Viewed'}
            leftIcon={<RecentlyViewed />}
            onPress={() => {}}
          />
        </RN.View>

        {/* My Settings section */}
        <RN.View style={styles.sectionWrapper}>
          <RN.Text style={[Heading3, styles.sectionTitle]}>My Settings</RN.Text>
          <AccountLinkButton
            title={'My Account Settings'}
            leftIcon={<AccountSettings />}
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Payment Method'}
            leftIcon={<PaymentMethod />}
            onPress={() => {}}
          />
          <AccountLinkButton
            title={'Security'}
            leftIcon={<Security />}
            onPress={() => {}}
          />
        </RN.View>

        {/* Log Out Button */}
        <ButtonPrimaryBig
          title={'Log Out'}
          onPress={() => {}}
          containerStyle={styles.logoutButton}
        />
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { flex: 1 },
  content: { paddingHorizontal: 20, marginTop: 30, flex: 0.8 },
  contentContainerStyle: {},
  headerWrapper: {
    backgroundColor: Primary(2),
    paddingVertical: 10,
    flex: 0.11,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {},
  headerSubtitle: {},
  sectionWrapper: { marginBottom: 20 },
  sectionTitle: { marginBottom: 10 },
  logoutButton: { marginHorizontal: 20, elevation: 3 },
});
