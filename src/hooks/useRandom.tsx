import { useEffect, useState } from 'react';
import catApi from '../api/catApi';
import { Cat } from '../interfaces/cat';

export const useRandom = () => {

  const [ isRefreshing, setIsRefreshing ] = useState(false);
  const [ cat, setCat ] = useState({} as Cat);
  const [ isLoading, setisLoading ] = useState(true);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async() => {
    const { data } = await catApi.get<Cat[]>('images/search?has_breeds=1');
    setCat( data[0] );
    setisLoading( false );
  };

  const onRefresh = () => {
    setIsRefreshing( true );
    getRandom();
    setTimeout(() => {
      setIsRefreshing( false );
    }, 1000);
  };

  return {
    randomImg: cat.url,
    cat,
    isRefreshing,
    onRefresh,
    isLoading,
  };
};
