// @flow

import React from 'react';

import {Text, View} from './primitives';
import Platform from './utils/Platform';

const IS_WEB = Platform.OS === 'web';

const displayText = `Halo Dunia!
Saat ini saya berjalan di ${Platform.OS}!`;

const ViewStyle = {
  flex: 1,
  height: '100%',
  width: '100%',
};

export default () => (
  <View style={ViewStyle}>
    <Text>{displayText}</Text>
    <Text>Jadi begini</Text>
    <Text>Ya Saya</Text>
  </View>
);
