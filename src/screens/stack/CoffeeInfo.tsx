import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
// import * as Animatable from 'react-native-animatable'

import { Primary } from '../../styles/colorPallete';
import { CartIcon } from '../../svg/CartIcon';
import { BodyIntroText, Heading2, MediumText } from '../../styles/fontSize';
import { RFValue } from 'react-native-responsive-fontsize';
import ButtonSecondaryBig from '../../components/ButtonSecondaryBig';
import CoffeeItem from '../../components/CoffeeItem';
import { coffeeList } from '../../api/data';
import { ChevronDown, LongArrowLeft } from '../../svg/ArrowIcons';
import SearchBar from '../../components/SearchBar';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';

interface Props {}

interface State {
  quantitySelected: number | string;
  quantityOptions: { label: string; value: number }[];
}

interface CoffeeItemProps {
  id: string;
  title: string;
  price: string;
  imageSource: string;
}

export default function CoffeeInfo(props: Props) {
  const [quantity, setQuantity] = React.useState<State>({
    quantitySelected: 1,
    quantityOptions: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
    ],
  });

  // toggle dropdown state
  const [showDropDown, setShowDropdown] = React.useState(false);

  // open dropdown function
  function openDropdown() {
    setShowDropdown(!showDropDown);
  }

  // close dropdown function
  function closeDropdown() {
    setShowDropdown(false);
  }

  // select dropdown item function
  function onSelectQuantity(value) {
    setQuantity({ ...quantity, quantitySelected: value });
    closeDropdown();
  }

  function renderDropdown() {
    return (
      <RN.ScrollView
        style={{
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 50,
          zIndex: 1000,
          width: 69,
          height: 120,
          borderRadius: 5,
          overflow: 'hidden',
          paddingBottom: 5,
        }}
      >
        {quantity.quantityOptions.map((option, index) => (
          <RN.Pressable
            style={[
              styles.dropdownitemButtion,
              {
                borderBottomWidth:
                  index + 1 === quantity.quantityOptions.length ? 0 : 1,
              },
            ]}
            onPress={() => onSelectQuantity(option.value)}
          >
            <RN.Text style={styles.dropdownItem}>{option.label}</RN.Text>
          </RN.Pressable>
        ))}
      </RN.ScrollView>
    );
  }

  function renderTopCoffeeList() {
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
        <LongArrowLeft />
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
        <RN.View style={styles.imageBgWrapper}>
          <RN.ImageBackground
            style={styles.ourCoffeeImageBg}
            source={require('../../assets/images/Macchiatto-big.png')}
            imageStyle={styles.imageStyle}
          >
            <RN.View style={styles.overlay}>
              <RN.Text style={[Heading2, styles.ourCoffeeText]}>
                Our Coffee
              </RN.Text>
            </RN.View>
          </RN.ImageBackground>
        </RN.View>

        {/* Description */}
        <RN.View style={styles.descWrapper}>
          <RN.Text style={[styles.descText]}>
            From the volcanic Kona region with unique weather conditions, Hawaii
            Kona coffee has a delicate sweet taste, with hints of berry-like
            chocolatey aromas.
          </RN.Text>
          <RN.Text style={[styles.skuText]}>SKU: GRAMHKPODS-30</RN.Text>
          <RN.Text style={[styles.price]}>£40.00</RN.Text>
        </RN.View>

        {/* Section */}
        <RN.View style={styles.addWrapper}>
          <RN.View>
            <RN.Pressable onPress={openDropdown} style={styles.dropdownWrapper}>
              <ChevronDown />
              <RN.Text style={styles.placeholderStyle}>
                {quantity.quantitySelected}
              </RN.Text>
            </RN.Pressable>
            {showDropDown && renderDropdown()}
          </RN.View>

          <ButtonPrimaryBig
            onPress={() => {}}
            title={'Add To Cart'}
            containerStyle={styles.addButton}
          />
        </RN.View>

        {/* Top Selling Section */}
        <RN.View style={styles.recentlyWrapper}>
          <RN.Text style={[styles.recentlyTitle]}>Recently Viewed</RN.Text>
          <RN.View style={styles.topSellingList}>
            {renderTopCoffeeList()}
          </RN.View>
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
    paddingVertical: 20,
  },
  descWrapper: { marginVertical: 10 },
  descText: {
    fontSize: 13,
    lineHeight: 1.4 * 13,
    fontFamily: 'OpenSans-Regular',
    color: '#000000',
  },
  imageBgWrapper: { elevation: 3 },
  ourCoffeeImageBg: {
    flex: 1,
    width: '100%',
    height: 196,
    alignItems: 'center',
    justifyContent: 'flex-end',
    elevation: 3,
  },
  imageStyle: { borderRadius: 10 },
  ourCoffeeText: { color: '#FFFFFF' },
  recentlyWrapper: { marginTop: 10 },
  topSellingTitle: {},
  topSellingList: {
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  overlay: {
    backgroundColor: '#00000050',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: '100%',
    bottom: 0,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: { marginBottom: 10 },
  skuText: {
    fontSize: 13,
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
  },
  addWrapper: { flexDirection: 'row', alignItems: 'center' },
  dropdownWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    // margin: 5,
    overflow: 'hidden',
    width: 69,
    height: 54,
  },
  containerStyle: {
    width: 30,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 0,
    padding: 0,
  },
  placeholderStyle: {
    fontSize: 13,
    fontFamily: 'OpenSans-Regular',
    color: '#000000',
    textAlign: 'center',
    padding: 0,
  },
  dropdownitemButtion: {
    paddingVertical: 10,
    borderBottomColor: '#00000050',
    borderBottomWidth: 1,
  },
  dropdownItem: {
    fontSize: 13,
    fontFamily: 'OpenSans-Regular',
    color: '#000000',
    textAlign: 'center',
  },
  recentlyTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: '#000000',
    marginBottom: 10,
    marginTop: 20,
  },
  addButton: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 0,
  },
});
