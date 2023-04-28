import { useEffect, useState } from 'react';
import catApi from '../api/catApi';
import { Cat } from 'src/interfaces/cat';

export const useRandom = () => {

  const [ refreshing, setRefreshing ] = useState(false);
  const [ cat, setCat ] = useState({} as Cat);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async() => {
    const { data } = await catApi.get<Cat[]>('images/search');
    setCat( data[0] );
  };

  const onRefresh = () => {
    setRefreshing( true );
    getRandom();
    setTimeout(() => {
      setRefreshing( false );
    }, 1000);
  };

  return {
    randomImg: cat.url,
    cat,
    refreshing,
    onRefresh,
  };
};
