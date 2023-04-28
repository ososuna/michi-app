/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native-gesture-handler';
import { useRandom } from '../hooks/useRandom';

export const RandomScreen = () => {

  const { cat, randomImg, isRefreshing, onRefresh, isLoading } = useRandom();
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        refreshControl={<RefreshControl refreshing={ isRefreshing } onRefresh={ onRefresh } />}
      >
        {
          ( isLoading ) ? <ActivityIndicator size={ 50 } />
          :
          <TouchableOpacity
            onPress={ () => navigate('Cat' as never, cat as never) }
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            { randomImg !== '' && <Image style={{ width: 430, height: 600 }} source={{ uri: randomImg }} /> }
          </TouchableOpacity>
        }
      </ScrollView>
    </SafeAreaView>
  );
};
