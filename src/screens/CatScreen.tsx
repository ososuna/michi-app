/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useContext } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Text, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Stack';
import Icon from 'react-native-ionicons';
import { ToastOptions } from 'react-native-toast-notifications/lib/typescript/toast';
import { CatContext } from '../context/CatContext';

interface Props extends StackScreenProps<RootStackParams, 'Cat'>{}


type OpenURLButtonProps = {
  url: string;
};

const OpenURLButton = ({ url }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Text style={{ color: 'blue' }} onPress={handlePress}>{ url }</Text>;
};

export const CatScreen = ({ route }: Props) => {

  const { url, breeds, id  } = route.params;
  const { goBack } = useNavigation();
  const { addCat } = useContext( CatContext );
  const toast = useToast();


  const handleAddCatToFavorites = () => {
    addCat({ url, id });
    const toastOptions: ToastOptions = {
      placement: 'bottom',
      duration: 2000,
      icon: <Icon name="heart" color="white" size={ 20 } />,
      style: { width: '100%' },
      animationType: 'slide-in',
    };
    toast.show('Added to favorites', toastOptions);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity onPress={ () => goBack() }>
            <Icon name="arrow-back" style={{ marginLeft: 25 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={ () => handleAddCatToFavorites() }>
            <Icon name="heart" style={{ marginRight: 25 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 20, alignItems: 'center' }}>
        <View>
          <Image style={{ width: 320, height: 320 }} source={{ uri: url }} />
        </View>
        <View style={{ marginTop: 25, marginHorizontal: 25 }}>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}><Text style={{ fontWeight: 'bold' }}>Name:</Text> { breeds[0].name }</Text>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}><Text style={{ fontWeight: 'bold' }}>Temperament:</Text> { breeds[0].temperament }</Text>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}><Text style={{ fontWeight: 'bold' }}>Origin:</Text> { breeds[0].origin }</Text>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}><Text style={{ fontWeight: 'bold' }}>Description:</Text> { breeds[0].description }</Text>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}><Text style={{ fontWeight: 'bold' }}>Dog friendly:</Text> { breeds[0].dog_friendly }</Text>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}><Text style={{ fontWeight: 'bold' }}>Wikipedia:</Text> <OpenURLButton url={ breeds[0].wikipedia_url } /></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
