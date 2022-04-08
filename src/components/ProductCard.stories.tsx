import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ProductCard from './ProductCard';

const data = {
  name: 'ageLoc Lumispa',
  price: '199.00',
};

storiesOf('Test Component', module)
  .add('defaultCard', () => <ProductCard data={data} />)
  .add('darkCard', () => <ProductCard data={data} dark />);
