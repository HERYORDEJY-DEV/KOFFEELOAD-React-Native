import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Primary } from '../styles/colorPallete';
import { BodyIntroText, MediumText } from '../styles/fontSize';
import { FavoriteIcon, DeleteIcon } from '../svg/CartIcon';

interface Props {
  id: string;
  title: string;
  price: string;
  quantity?: string | 1;
  imageSource: RN.ImageProps;
  onPress?: () => void;
  containerStyle?: RN.StyleProp<RN.PressableProps>;
}

interface State {
  quantitySelect: number | string;
}

export default function CartItem(props: Props) {
  // navigation instance
  const navigation = useNavigation();

  const [quantity, setQuantity] = React.useState<State>({ quantitySelect: 1 });

  // quantity change function
  function plusQuantity() {
    setQuantity({ ...quantity, quantitySelect: +quantity.quantitySelect + 1 });
  }
  function minusQuantity() {
    setQuantity({ ...quantity, quantitySelect: +quantity.quantitySelect - 1 });
  }

  return (
    <RN.View style={[styles.container, props.containerStyle]}>
      <RN.View style={[styles.topWrapper]}>
        <RN.View style={styles.imageWrapper}>
          <RN.Image style={styles.image} source={props.imageSource} />
        </RN.View>
        <RN.View style={styles.titleWrapper}>
          <RN.Text style={[styles.title]}>{props.title}</RN.Text>
          <RN.Text style={[styles.price]}>£{props.price}</RN.Text>
        </RN.View>
      </RN.View>
      <RN.View style={styles.bottomWrapper}>
        <RN.View style={styles.bottomLeftWrapper}>
          <RN.Pressable style={[styles.favButtonWrapper]}>
            <FavoriteIcon />
          </RN.Pressable>
          <RN.Pressable style={[styles.delButtonWrapper]}>
            <DeleteIcon />
            <RN.Text
              style={[
                styles.price,
                { fontFamily: 'OpenSans-Bold', marginLeft: 10 },
              ]}
            >
              Remove
            </RN.Text>
          </RN.Pressable>
        </RN.View>
        <RN.View style={styles.quantityWrapper}>
          <RN.Pressable style={[styles.plusWrapper]} onPress={minusQuantity}>
            <RN.Text
              style={[
                styles.price,
                { fontFamily: 'OpenSans-Bold', color: '#FFFFFF' },
              ]}
            >
              -
            </RN.Text>
          </RN.Pressable>
          <RN.View style={styles.quantityValueWrapper}>
            <RN.Text style={[styles.price, styles.quantityValue]}>
              {props.quantity ?? +quantity.quantitySelect}
            </RN.Text>
          </RN.View>
          <RN.Pressable style={[styles.plusWrapper]} onPress={plusQuantity}>
            <RN.Text
              style={[
                styles.price,
                { fontFamily: 'OpenSans-Bold', color: '#FFFFFF' },
              ]}
            >
              +
            </RN.Text>
          </RN.Pressable>
        </RN.View>
      </RN.View>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    height: 147,
    backgroundColor: Primary(4),
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 8.71,
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titleWrapper: { marginLeft: 10 },
  title: {
    marginVertical: 5,
    marginBottom: 3,
    fontSize: 18,
    color: '#000000',
    fontFamily: 'OpenSans-Bold',
  },
  price: {
    fontSize: 13,
    color: '#000000',
    fontFamily: 'OpenSans-SemiBold',
  },
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Primary(5),
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  imageWrapper: {
    height: 69.69,
    width: 90.01,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  image: { flex: 1, width: null, height: null },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  favButtonWrapper: { marginRight: 20, padding: 10, paddingLeft: 0 },
  delButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 0,
  },
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plusWrapper: {
    backgroundColor: Primary(1),
    borderRadius: 18,
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityValueWrapper: {
    backgroundColor: '#FFFFFF',
    width: 29,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginHorizontal: 5,
  },
  quantityValue: {
    fontFamily: 'OpenSans-Bold',
    color: '#00000050',
  },
});
