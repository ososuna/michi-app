import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Stack';

interface Props extends StackScreenProps<RootStackParams, 'Cat'>{}

export const CatScreen = ({ route }: Props) => {

  const {  } = route.params;

  return (
    <SafeAreaView>
      <Text>Cat Screen</Text>
    </SafeAreaView>
  );
};
