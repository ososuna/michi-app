/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useSearch } from '../hooks/useSearch';

export const SearchScreen = () => {

  const [ open, setOpen ] = useState( false );
  const [ value, setValue ] = useState( null );
  const [ items, setItems ] = useState([
    {label: 'Hats', value: '1'},
    {label: 'Space', value: '2'},
    {label: 'Funny', value: '3'},
    {label: 'Sunglasses', value: '4'},
    {label: 'Boxes', value: '5'},
  ]);

  const { searchByCategory, cats, isLoading } = useSearch();

  useEffect(() => {
    if (value !== null) {
      searchByCategory( value );
    }
  }, [ value ]);

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 25 }}>
        <DropDownPicker
          open={ open }
          value={ value }
          items={ items }
          setOpen={ setOpen }
          setValue={ setValue }
          setItems={ setItems }
        />
      </View>
      <View style={{ marginTop: 25, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', zIndex : -5 }}>
        {
          ( isLoading ) ?
            <ActivityIndicator size={ 50 } />
          :
            cats.map( ({ url, id }) => (
              <Image key={ id } style={{ width: 110, height: 110, margin: 10 }} source={{ uri: url }} />
            ))
        }
      </View>
    </SafeAreaView>
  );
};
