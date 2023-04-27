/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { useRandom } from '../hooks/useRandom';

export const RandomScreen = () => {

  const { randomImg, dimensions } = useRandom();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { randomImg !== '' && <Image style={{ width: dimensions.width, height: dimensions.height }} source={{ uri: randomImg }} /> }
      </View>
    </SafeAreaView>
  );
};
