import * as React from 'react';
import * as RN from 'react-native';

import normalize from 'react-native-normalize';
import * as NB from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
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
interface NavProps {
  id?: string;
  title?: string;
  description?: string;
  sku?: string;
  price?: string;
  imageSource?: RN.ImageProps;
}

interface State {
  quantitySelected: number | string;
  quantityOptions: { label: string; value: number }[];
}

interface CoffeeItemProps {
  id: string;
  title: string;
  price: string;
  imageSource: RN.ImageProps;
  description?: string;
  sku?: string;
}

export default function CoffeeInfo(props: Props) {
  // get window dimension
  const windowDimension = RN.useWindowDimensions();

  // navigation instances
  const navigation = useNavigation();
  const route = useRoute();

  // navigation params data
  const params: NavProps = route.params;
  const { title, imageSource, id, description, sku, price } = params;

  // Quantity state
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

  // render the dropdown select for quantity
  function renderDropdown() {
    return (
      <RN.Modal
        transparent={true}
        visible={showDropDown}
        style={styles.modalWrapper}
        onRequestClose={closeDropdown}
      >
        <RN.View
          style={{
            ...RN.StyleSheet.absoluteFillObject,
            backgroundColor: '#00000050',
          }}
        />
        <RN.ScrollView
          style={[
            styles.dropdownListWrapper,
            {
              top: windowDimension.height / 2.3,
            },
          ]}
        >
          {quantity.quantityOptions.map((option, index) => (
            <RN.Pressable
              key={`00 + ${index} + ${option.label}`}
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
      </RN.Modal>
    );
  }

  // render the list of top coffees
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
        <RN.Pressable onPress={() => navigation.goBack()}>
          <LongArrowLeft width={RFValue(21.83)} height={RFValue(21.83)} />
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
        <RN.View style={styles.imageBgWrapper}>
          <RN.ImageBackground
            style={styles.ourCoffeeImageBg}
            source={imageSource}
            imageStyle={styles.imageStyle}
          >
            <RN.View style={styles.overlay}>
              <RN.Text style={[Heading2, styles.ourCoffeeText]}>
                {title}
              </RN.Text>
            </RN.View>
          </RN.ImageBackground>
        </RN.View>

        {/* Description */}
        <RN.View style={styles.descWrapper}>
          <RN.Text style={[styles.descText]}>{description}</RN.Text>
          <RN.Text style={[styles.skuText]}>SKU: {sku}</RN.Text>
          <RN.Text style={[styles.price]}>??{price}</RN.Text>
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
      {renderDropdown()}
    </NB.Container>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: Primary(3),
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(5),
  },
  content: {},
  contentContainerStyle: { paddingTop: RFValue(10) },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: RFValue(10),
    paddingTop: RFValue(30),
  },
  descWrapper: { marginVertical: RFValue(10) },
  descText: {
    fontSize: RFValue(12),
    lineHeight: RFValue(1.4 * 12),
    fontFamily: 'OpenSans-Regular',
    color: '#000000',
  },
  imageBgWrapper: {},
  ourCoffeeImageBg: {
    width: '100%',
    height: RFValue(196),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageStyle: { borderRadius: RFValue(10) },
  ourCoffeeText: { color: '#FFFFFF' },
  recentlyWrapper: { marginTop: RFValue(10), paddingBottom: RFValue(10) },
  topSellingTitle: {},
  topSellingList: {
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  overlay: {
    backgroundColor: '#00000061',
    borderBottomRightRadius: RFValue(10),
    borderBottomLeftRadius: RFValue(10),
    width: '100%',
    bottom: 0,
    height: RFValue(42),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {},
  skuText: {
    fontSize: RFValue(13),
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
    marginVertical: RFValue(5),
  },
  price: {
    fontSize: RFValue(18),
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
  },
  addWrapper: { flexDirection: 'row', alignItems: 'center' },
  dropdownWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: RFValue(10),
    backgroundColor: '#FFFFFF',
    // margin: 5,
    overflow: 'hidden',
    width: RFValue(69),
    height: RFValue(54),
  },
  containerStyle: {
    width: RFValue(30),
    height: RFValue(54),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 0,
    padding: 0,
  },
  placeholderStyle: {
    fontSize: RFValue(13),
    fontFamily: 'OpenSans-Regular',
    color: '#000000',
    textAlign: 'center',
    padding: 0,
  },
  dropdownitemButtion: {
    paddingVertical: RFValue(10),
    borderBottomColor: '#00000050',
    borderBottomWidth: 1,
  },
  dropdownItem: {
    fontSize: RFValue(13),
    fontFamily: 'OpenSans-Regular',
    color: '#000000',
    textAlign: 'center',
  },
  recentlyTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: RFValue(14),
    color: '#000000',
    marginBottom: RFValue(10),
    marginTop: RFValue(20),
  },
  addButton: {
    flex: 1,
    marginHorizontal: RFValue(30),
    marginVertical: 0,
  },
  dropdownListWrapper: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: RFValue(20),
    zIndex: 100000,
    width: RFValue(69),
    height: RFValue(150),
    borderRadius: RFValue(5),
    overflow: 'hidden',
    paddingBottom: RFValue(5),
  },
  dropdownContainer: { alignItems: 'center' },
  modalWrapper: { flex: 1, alignItems: 'center', backgroundColor: '#00000050' },
});
