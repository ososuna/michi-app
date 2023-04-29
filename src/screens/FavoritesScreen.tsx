/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { CatContext } from '../context/CatContext';

export const FavoritesScreen = () => {

  const { catState } = useContext(CatContext);

  return (
    <SafeAreaView style={{ margin: 20 }}>
      <View style={{ height: 25 }} />
      <View style={{ marginTop: 25, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', zIndex : -5 }}>
        {
          ( catState.cats.length === 0 )
          ? <Text style={{ fontSize: 16, textAlign: 'center' }}>You have no favorite kittens yet. Go to random tab to add some</Text>
          : catState.cats.map( ({ url, id }) => (
            <Image key={ id } style={{ width: 110, height: 110, margin: 10 }} source={{ uri: url }} />
          ))
        }
      </View>
    </SafeAreaView>
  );
};
