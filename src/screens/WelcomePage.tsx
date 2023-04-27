/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/theme';

export const WelcomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Welcome to the Michi App</Text>
        <Image style={{ width: 260, height: 260 }} source={require('../assets/img/cat.png')} />
        <TouchableOpacity style={{ backgroundColor: colors.primary, borderRadius: 8, width: 140, alignItems: 'center', marginTop: 20, maxHeight: 48 }}>
          <Text style={{ color: 'white', fontSize: 18, paddingHorizontal: 25, paddingVertical: 14 }}>
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
