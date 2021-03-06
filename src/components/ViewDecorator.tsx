import React from 'react';
import {View} from 'react-native';

export const ButtonStyle = storyFn => {
  return (
    <View style={{flex: 1, marginVertical: 40, marginHorizontal: 20}}>
      {storyFn()}
    </View>
  );
};
