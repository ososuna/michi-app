import { useState } from 'react';
import catApi from '../api/catApi';
import { CatCategory } from '../interfaces/cat';

export const useSearch = () => {

  const [ cats, setCats ] = useState([] as CatCategory[]);
  const [ isLoading, setIsLoading ] = useState( false );

  const searchByCategory = async( category: string ) => {
    setIsLoading( true );
    const { data } = await catApi.get( `/images/search?limit=15&category_ids=${ category }`);
    setCats( data );
    setIsLoading( false );
  };

  return {
    searchByCategory,
    cats,
    isLoading,
  };
};
