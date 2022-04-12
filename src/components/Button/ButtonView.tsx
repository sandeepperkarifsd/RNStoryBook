import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import ViewStyles from '../styles';

function ButtonView({onPress = () => {}, children = '', outline = false}) {
  const containerStyles = [ViewStyles.container];
  const textStyles = [ViewStyles.text];

  if (outline) {
    containerStyles.push(ViewStyles.containerOutline);
    textStyles.push(ViewStyles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
}

export default ButtonView;
