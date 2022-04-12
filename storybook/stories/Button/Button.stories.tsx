import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import ButtonView from 'components/Button/ButtonView';
import React from 'react';
import { Text } from 'react-native';
// import { Text } from 'react-native';
// import { View } from 'react-native';
//import { Image } from 'react-native';
//import { TouchableHighlight } from 'react-native';
//import Button from '.';
// import MUCL_Button from '../../../src/components/Button/index';
/* import MUCL_Text from '../../../src/components/Text/index';
import MUCL_View from '../../../src/components/View/index';
import MUCL_ActivityIndicator from '../../../src/components/ActivityIndicator/index';
import MUCL_Image from '../../../src/components/Image/index';
import MUCL_TouchableHighlight from '../../../src/components/TouchableHighlight/index';

import CenterView from '../CenterView';
 */
storiesOf('Button', module)
  .add('with text', () => (
    <ButtonView
      //onPress={() => action('clicked-text')}
      //={action('clicked-text')}
      onPress={() => alert('Button Pressed!')}>
      Press
    </ButtonView>    
  ))
  .add('with some emoji', () => (
    <ButtonView onPress={action('clicked-emoji')}>
      😀 😎 👍 💯
    </ButtonView>
  ));

  {/* <MUCL_View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1,
      }}>
      <Button
        //onPress={() => action('clicked-text')}
        //={action('clicked-text')}
        onPress={() => alert('Button Pressed!')}>
        <MUCL_Text
          style={{fontSize: 20, color: 'red'}}
          onPress={() => {
            action('pressing mucl text');
          }}>
          {text('Button text', 'Hello Buttons')}
        </MUCL_Text>
      </Button>
      <MUCL_ActivityIndicator size="small" color="#0000ff" />
      <MUCL_Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <MUCL_TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert('Pressed!')}>
        <MUCL_Text style={{fontSize: 14, color: 'black'}}>
          {text('Button text', 'Hello TouchableHighlight')}
        </MUCL_Text>
      </MUCL_TouchableHighlight>
    </MUCL_View> */}
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}

