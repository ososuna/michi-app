/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons';
import { colors } from '../theme/theme';

export const WelcomeScreen = () => {

  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Welcome to the Michi App</Text>
        <Image style={{ width: 260, height: 260 }} source={require('../assets/img/cat.png')} />
        <TouchableOpacity
          onPress={() => navigate('Tabs' as never)}
          style={{ backgroundColor: colors.primary, borderRadius: 8, width: 160, height: 48, alignItems: 'center', marginTop: 20, maxHeight: 48, flexDirection: 'row' }}
        >
          <View style={{ flex: 9 }}>
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'right' }}>
              Get started
            </Text>
          </View>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 3, alignItems: 'flex-start' }}>
            <Icon name="arrow-round-forward" color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
