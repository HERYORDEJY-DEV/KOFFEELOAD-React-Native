import * as React from 'react';
import * as RN from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

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
        <RN.Text style={[BodyIntroText, styles.title]} numberOfLines={1}>
          {props.title}
        </RN.Text>
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
    height: RFValue(150.99),
    width: RFValue(102.59),
    backgroundColor: Primary(4),
    borderRadius: RFValue(10),
    overflow: 'hidden',
    paddingHorizontal: RFValue(6.29),
    paddingVertical: RFValue(8.71),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(10),
  },
  title: {
    textAlign: 'center',
    marginVertical: RFValue(5),
    marginBottom: RFValue(3),
  },
  price: { textAlign: 'center', fontSize: RFValue(10) },
  topWrapper: {},
  imageWrapper: {
    height: RFValue(69.69),
    width: RFValue(90.01),
    borderRadius: RFValue(10),
    elevation: 3,
    overflow: 'hidden',
  },
  image: { flex: 1, width: null, height: null },
  addButtonWrapper: {
    backgroundColor: Primary(1),
    alignItems: 'center',
    justifyContent: 'center',
    height: RFValue(20.33),
    width: RFValue(90.01),
    borderRadius: RFValue(4.84),
  },
  addButtonTitle: {
    color: '#FFFFFF',
    fontSize: RFValue(10),
  },
});
