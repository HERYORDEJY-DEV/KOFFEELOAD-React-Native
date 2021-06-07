import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Primary } from '../styles/colorPallete';
import { BodyIntroText, MediumText } from '../styles/fontSize';
import normalize from 'react-native-normalize';

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
    height: normalize(150.99),
    width: normalize(102.59, 'width'),
    backgroundColor: Primary(4),
    borderRadius: normalize(10),
    overflow: 'hidden',
    paddingHorizontal: normalize(6.29),
    paddingVertical: normalize(8.71),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(10),
  },
  title: {
    textAlign: 'center',
    marginVertical: normalize(5),
    marginBottom: normalize(3),
  },
  price: { textAlign: 'center', fontSize: normalize(10) },
  topWrapper: {},
  imageWrapper: {
    height: normalize(69.69, 'height'),
    width: normalize(90.01, 'width'),
    borderRadius: normalize(10),
    elevation: 3,
    overflow: 'hidden',
  },
  image: { flex: 1, width: null, height: null },
  addButtonWrapper: {
    backgroundColor: Primary(1),
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(20.33, 'height'),
    width: normalize(90.01, 'width'),
    borderRadius: normalize(4.84),
  },
  addButtonTitle: {
    color: '#FFFFFF',
    fontSize: normalize(10),
  },
});
