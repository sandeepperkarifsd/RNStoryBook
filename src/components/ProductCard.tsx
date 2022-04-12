import React from 'react';
import {View, Text} from 'react-native';
import ImageView from './ImageView';
import ButtonView from './Button/ButtonView';
import ViewStyles from './styles';

const ProductCard = ({data = {name: '', price: ''}, dark = false}) => {
  const cardStyles = [ViewStyles.productCard];
  const HeadingStyle = [ViewStyles.name];
  const SubHeadingStyle = [ViewStyles.name1];

  if (dark) {
    cardStyles.push(ViewStyles.productCardDark);
    HeadingStyle.push(ViewStyles.nameDark);
    SubHeadingStyle.push(ViewStyles.name1Dark);
  }

  return (
    <View style={cardStyles}>
      <ImageView />
      <View style={{marginLeft: 10, marginTop: 10, flex: 1, marginRight: 20}}>
        <Text style={HeadingStyle}>{data.name}</Text>
        <Text style={SubHeadingStyle}>${data.price}</Text>
        <ButtonView>ADD TO CART</ButtonView>
      </View>
    </View>
  );
};

export default ProductCard;
