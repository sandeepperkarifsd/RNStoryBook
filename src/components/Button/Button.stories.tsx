import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import ButtonView from './ButtonView';
import {ButtonStyle} from '../ViewDecorator';

storiesOf('Test Component', module)
  .addDecorator(ButtonStyle)
  .add('default', () => (
    <ButtonView onPress={action('tapped-default')}>Press</ButtonView>
  ))
  .add('outline', () => (
    <ButtonView onPress={action('tapped-outline')} outline>
      Press
    </ButtonView>
  ));
