import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ImageView from './ImageView';

storiesOf('Test Component', module)
  .add('product', () => <ImageView />)
  .add('profile', () => <ImageView profile />);
