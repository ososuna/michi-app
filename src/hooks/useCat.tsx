/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Cat } from '../interfaces/cat';
import catApi from '../api/catApi';

export const useCat = ( id: string ) => {

  const [ cat, setCat ] = useState({} as Cat);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    getCats();
  }, []);

  const getCats = async() => {
    const { data } = await catApi.get<Cat>(`images/${ id }`);
    setCat( data );
    setIsLoading( false );
  };

  return {
    cat,
    breeds: cat.breeds,
    isLoading,
  };
};
