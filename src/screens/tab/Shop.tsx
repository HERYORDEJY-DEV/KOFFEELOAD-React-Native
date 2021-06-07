import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { useNavigation } from '@react-navigation/native';
import normalize from 'react-native-normalize';

import { Primary } from '../../styles/colorPallete';
import { CartIcon } from '../../svg/CartIcon';
import { BodyIntroText, Heading2, MediumText } from '../../styles/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';
import ButtonSecondaryBig from '../../components/ButtonSecondaryBig';
import CoffeeItem from '../../components/CoffeeItem';
import { coffeeList } from '../../api/data';
import { LongArrowLeft } from '../../svg/ArrowIcons';
import SearchBar from '../../components/SearchBar';

interface Props {}

interface State {}

interface CoffeeItemProps {
  id: string;
  title: string;
  price: string;
  imageSource: string;
}

export default function Shop(props: Props) {
  // navigation instance
  const navigation = useNavigation();

  function renderCoffeeList() {
    return coffeeList.map((coffee: CoffeeItemProps, index) => (
      <CoffeeItem
        key={coffee.id + index}
        title={coffee.title}
        price={coffee.price}
        id={coffee.id}
        imageSource={coffee.imageSource}
      />
    ));
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
        <LongArrowLeft />
        <RN.Pressable onPress={() => navigation.navigate('Cart')}>
          <CartIcon />
        </RN.Pressable>
      </RN.View>

      {/* Search Bar */}
      <SearchBar onChangeText={() => {}} containerStyle={styles.searchBar} />

      {/* Content */}
      <NB.Content
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
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
          <RN.View style={styles.topSellingList}>{renderCoffeeList()}</RN.View>
        </RN.View>
      </NB.Content>
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: Primary(3),
    paddingHorizontal: normalize(20),
    paddingTop: normalize(5),
  },
  content: {},
  contentContainerStyle: {},
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalize(10),
    paddingTop: normalize(40),
  },
  descWrapper: { marginBottom: normalize(20) },
  descImage: {
    minHeight: normalize(16),
    marginTop: normalize(10),
    marginBottom: normalize(5),
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
  topSellingWrapper: {
    marginVertical: normalize(10),
    marginTop: normalize(10),
  },
  topSellingTitle: {},
  topSellingList: {
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  overlay: {
    ...RN.StyleSheet.absoluteFillObject,
    backgroundColor: '#00000080',
    borderRadius: normalize(10),
  },
  searchBar: { marginBottom: normalize(10) },
});
