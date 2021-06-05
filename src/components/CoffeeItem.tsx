import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Primary } from '../styles/colorPallete';
import { BodyIntroText, MediumText } from '../styles/fontSize';

interface Props {
  id: string;
  title: string;
  price: string;
  description?: string;
  sku?: string;
  imageSource: RN.ImageProps;
  onPress?: () => void;
  containerStyle?: RN.StyleProp<RN.PressableProps>;
}

interface State {}

export default function CoffeeItem(props: Props) {
  // navigation instance
  const navigation = useNavigation();

  // destructuring props
  const { id, title, price, imageSource, description, sku } = props;

  return (
    <RN.View style={[styles.container, props.containerStyle]}>
      <RN.Pressable
        style={[styles.topWrapper]}
        onPress={() =>
          navigation.navigate('CoffeeInfo', {
            id,
            title,
            price,
            imageSource,
            description,
            sku,
          })
        }
      >
        <RN.View style={styles.imageWrapper}>
          <RN.Image style={styles.image} source={props.imageSource} />
        </RN.View>
        <RN.Text style={[BodyIntroText, styles.title]}>{props.title}</RN.Text>
        <RN.Text style={[MediumText, styles.price]}>£{props.price}</RN.Text>
      </RN.Pressable>
      <RN.Pressable style={[styles.addButtonWrapper]}>
        <RN.Text style={[MediumText, styles.addButtonTitle]}>
          Add to cart
        </RN.Text>
      </RN.Pressable>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    height: 150.99,
    width: 102.59,
    backgroundColor: Primary(4),
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 6.29,
    paddingVertical: 8.71,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: { textAlign: 'center', marginVertical: 5, marginBottom: 3 },
  price: { textAlign: 'center', fontSize: 9.68 },
  topWrapper: {},
  imageWrapper: {
    height: 69.69,
    width: 90.01,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  image: { flex: 1, width: null, height: null },
  addButtonWrapper: {
    backgroundColor: Primary(1),
    alignItems: 'center',
    justifyContent: 'center',
    height: 20.33,
    width: 90.01,
    borderRadius: 4.84,
  },
  addButtonTitle: { color: '#FFFFFF', fontSize: 9.68 },
});
