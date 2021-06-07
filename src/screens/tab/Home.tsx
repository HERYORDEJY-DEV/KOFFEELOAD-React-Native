import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Primary } from '../../styles/colorPallete';
import { CartIcon } from '../../svg/CartIcon';
import { BodyIntroText, Heading2, MediumText } from '../../styles/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';
import ButtonSecondaryBig from '../../components/ButtonSecondaryBig';
import CoffeeItem from '../../components/CoffeeItem';
import { coffeeList } from '../../api/data';
import normalize from 'react-native-normalize';

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

export default function Home(props: Props) {
  // navigation instance
  const navigation = useNavigation();

  function renderCoffeeList() {
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
      {/* Header  */}
      <RN.View style={styles.headerWrapper}>
        <RN.Text style={[Heading2, styles.headerText]}>Welcome Adedire</RN.Text>
        <RN.Pressable onPress={() => navigation.navigate('Cart')}>
          <CartIcon width={normalize(28)} height={normalize(24.8)} />
        </RN.Pressable>
      </RN.View>

      {/* Content */}
      <NB.Content
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {/* Hero Image */}
        <RN.View style={styles.heroImageWrapper}>
          <RN.Image
            source={require('../../assets/images/HomeHero.png')}
            style={styles.heroImage}
          />
        </RN.View>

        {/* Desc */}
        <RN.View style={styles.descWrapper}>
          <RN.Image
            style={styles.descImage}
            source={require('../../assets/images/koffee-logo-small.png')}
          />
          <RN.Text style={[MediumText, styles.descText]}>
            We have sourced the finest and rarest coffees, that easily allows
            coffee lovers to experience one of life's simple pleasures delivered
            right to your doorstep.
          </RN.Text>
        </RN.View>

        {/* Our Coffee Section */}
        <RN.ImageBackground
          style={styles.ourCoffeeImageBg}
          source={require('../../assets/images/OurCoffeBg.png')}
          imageStyle={styles.imageStyle}
        >
          <RN.View style={styles.overlay} />
          <RN.Text style={[Heading2, styles.ourCoffeeText]}>Our Coffee</RN.Text>
        </RN.ImageBackground>

        {/* Top Selling Section */}
        <RN.View style={styles.topSellingWrapper}>
          <RN.Text style={[BodyIntroText, styles.topSellingTitle]}>
            Top Selling
          </RN.Text>
          <RN.View style={styles.topSellingList}>{renderCoffeeList()}</RN.View>
        </RN.View>
        <ButtonSecondaryBig
          title={'Create a Coffee Plan'}
          onPress={() => navigation.navigate('Cart')}
          containerStyle={styles.createButton}
        />
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: Primary(3),
    padding: normalize(20),
    paddingBottom: 0,
  },
  content: {},
  contentContainerStyle: { paddingBottom: normalize(20) },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingVertical: normalize(10),
    paddingBottom: normalize(15),
    paddingTop: normalize(30),
  },
  headerText: {},
  heroImageWrapper: {
    borderRadius: normalize(10),
    overflow: 'hidden',
    height: normalize(134, 'height'),
    marginBottom: 10,
  },
  heroImage: { flex: 1, width: null, height: null },
  descWrapper: { marginBottom: normalize(20) },
  descImage: {
    height: normalize(16, 'height'),
    width: normalize(132),
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
  },
  descText: { fontSize: normalize(13), lineHeight: normalize(1.4 * 13) },
  ourCoffeeImageBg: {
    flex: 1,
    width: '100%',
    height: normalize(96),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: { borderRadius: normalize(10) },
  ourCoffeeText: { color: '#FFFFFF' },
  topSellingWrapper: { marginTop: normalize(20) },
  topSellingTitle: {},
  topSellingList: {
    marginVertical: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createButton: {
    elevation: 3,
    marginHorizontal: normalize(20),
    marginBottom: 0,
  },
  overlay: {
    ...RN.StyleSheet.absoluteFillObject,
    backgroundColor: '#00000080',
    borderRadius: normalize(10),
  },
});
