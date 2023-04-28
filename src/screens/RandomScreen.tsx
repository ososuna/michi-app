/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { useRandom } from '../hooks/useRandom';
import { RefreshControl } from 'react-native-gesture-handler';

export const RandomScreen = () => {

  const { randomImg, refreshing, onRefresh } = useRandom();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        refreshControl={<RefreshControl refreshing={ refreshing } onRefresh={ onRefresh } />}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          { randomImg !== '' && <Image style={{ width: 430, height: 600 }} source={{ uri: randomImg }} /> }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
