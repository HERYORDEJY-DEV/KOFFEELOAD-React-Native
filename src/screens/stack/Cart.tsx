import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import normalize from 'react-native-normalize';

import { Primary } from '../../styles/colorPallete';
import { BodyIntroText, Heading2, Heading3 } from '../../styles/fontSize';
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
import CartItem from '../../components/CartItem';
import { coffeeList } from '../../api/data';
import CoffeeItem from '../../components/CoffeeItem';

interface Props {}

interface State {}

interface CoffeeItemProps {
  id: string;
  title: string;
  price: string;
  imageSource: RN.ImageProps;
  description?: string;
  sku?: string;
}

export default function Cart(props: Props) {
  function renderRecentlyViewed() {
    return coffeeList.map(
      (coffee: CoffeeItemProps, index) =>
        index < 3 && (
          <CoffeeItem
            key={coffee.id + index}
            title={coffee.title}
            price={coffee.price}
            id={coffee.id}
            imageSource={coffee.imageSource}
            description={coffee.description}
            sku={coffee.sku}
          />
        ),
    );
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
        <RN.Text style={[Heading2, styles.headerTitle]}>Cart</RN.Text>
      </RN.View>

      {/* Content */}
      <NB.Content
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {/* cart items */}
        <CartItem
          id={'001'}
          title={'Cappuccino'}
          price={'29.90'}
          imageSource={require('../../assets/images/Cappuccino.png')}
          onPress={() => {}}
        />

        <CartItem
          id={'001'}
          title={'Cappuccino'}
          price={'29.90'}
          imageSource={require('../../assets/images/Cappuccino.png')}
          onPress={() => {}}
        />

        {/* Total */}
        <RN.View style={styles.totalWrapper}>
          <RN.Text style={[styles.totalText]}>Total</RN.Text>
          <RN.Text style={[styles.totalAmount]}>£40.00</RN.Text>
        </RN.View>

        {/* Complete Your Order Button */}
        <ButtonPrimaryBig
          title={'Complete Your Order'}
          onPress={() => {}}
          containerStyle={styles.logoutButton}
        />

        {/* Recently Viewed */}
        <RN.View style={styles.recentlyWrapper}>
          <RN.Text style={[styles.totalText]}>Recently Viewed</RN.Text>
          <RN.View style={styles.recentlyListWrapper}>
            {renderRecentlyViewed()}
          </RN.View>
        </RN.View>
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { flex: 1 },
  content: {
    paddingHorizontal: normalize(20),
    marginTop: normalize(30),
    flex: 0.8,
  },
  contentContainerStyle: {},
  headerWrapper: {
    backgroundColor: Primary(2),
    paddingVertical: normalize(10),
    flex: 0.11,
    justifyContent: 'flex-end',
    paddingHorizontal: normalize(20),
    paddingTop: normalize(30),
  },
  headerTitle: {},
  headerSubtitle: {},
  sectionWrapper: { marginBottom: normalize(20) },
  sectionTitle: { marginBottom: normalize(10) },
  logoutButton: { marginHorizontal: normalize(20), elevation: 3 },
  totalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(10),
  },
  totalText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: normalize(14),
    color: '#000000',
  },
  totalAmount: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: normalize(14),
    color: '#000000',
  },
  recentlyWrapper: { marginVertical: normalize(20), marginTop: normalize(30) },
  recentlyListWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(10),
  },
});
