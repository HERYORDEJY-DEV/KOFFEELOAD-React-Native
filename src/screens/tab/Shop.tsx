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
      <RN.StatusBar backgroundColor={Primary(3)} barStyle={'dark-content'} />
      {/* Header  */}
      <RN.View style={styles.headerWrapper}>
        <LongArrowLeft />
        <CartIcon />
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
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  content: {},
  contentContainerStyle: {},
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
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
  topSellingWrapper: { marginVertical: 10, marginTop: 10 },
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
    borderRadius: 10,
  },
  searchBar: { marginBottom: 20 },
});
