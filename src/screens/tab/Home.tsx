import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { Primary } from '../../styles/colorPallete';
import { CartIcon } from '../../svg/CartIcon';
import { BodyIntroText, Heading2, MediumText } from '../../styles/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';
import ButtonSecondaryBig from '../../components/ButtonSecondaryBig';
import CoffeeItem from '../../components/CoffeeItem';
import { coffeeList } from '../../api/data';

interface Props {}

interface State {}

interface CoffeeItemProps {
  id: string;
  title: string;
  price: string;
  imageSource: string;
}

export default function Home(props: Props) {
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
          />
        ),
    );
  }

  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar backgroundColor={Primary(3)} barStyle={'dark-content'} />
      {/* Header  */}
      <RN.View style={styles.headerWrapper}>
        <RN.Text style={[Heading2, styles.headerText]}>Welcome Adedire</RN.Text>
        <CartIcon />
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
      </NB.Content>
      <ButtonSecondaryBig
        title={'Create a Coffee Plan'}
        onPress={() => {}}
        containerStyle={styles.createButton}
      />
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: { backgroundColor: Primary(3), padding: 20 },
  content: {},
  contentContainerStyle: {},
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingVertical: 15,
  },
  headerText: {},
  heroImageWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    minHeight: 134,
    marginBottom: 10,
  },
  heroImage: { flex: 1, width: null, height: null },
  descWrapper: { marginBottom: 20 },
  descImage: { minHeight: 16, marginTop: 10, marginBottom: 5 },
  descText: { fontSize: 13, lineHeight: 1.4 * 13 },
  ourCoffeeImageBg: {
    flex: 1,
    width: '100%',
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: { borderRadius: 10 },
  ourCoffeeText: { color: '#FFFFFF' },
  topSellingWrapper: { marginVertical: 10, marginTop: 20 },
  topSellingTitle: {},
  topSellingList: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createButton: { elevation: 3, marginHorizontal: 20, marginBottom: 0 },
  overlay: {
    ...RN.StyleSheet.absoluteFillObject,
    backgroundColor: '#00000080',
    borderRadius: 10,
  },
});
