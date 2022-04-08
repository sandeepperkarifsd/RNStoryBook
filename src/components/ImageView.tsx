import React from 'react';
import {Image} from 'react-native';

import ViewStyles from './styles';

function ImageView({profile = false}) {
  const imageStyles = [ViewStyles.productImage];
  var src = require('../assets/product1.png');

  if (profile) {
    imageStyles.push(ViewStyles.profileImage);
    src = require('../assets/images.png');
  }

  return <Image source={src} style={imageStyles} />;
}

export default ImageView;
