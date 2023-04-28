import { useEffect, useState } from 'react';
import catApi from '../api/catApi';
import { Cat, Dimensions } from 'src/interfaces/cat';

export const useRandom = () => {

  const [ randomImg, setRandomImg ] = useState('');
  const [ dimensions, setDimensions ] = useState({} as Dimensions);
  const [ refreshing, setRefreshing ] = useState(false);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async() => {
    const { data } = await catApi.get<Cat[]>('images/search');
    setDimensions({ height: data[0].height, width: data[0].width });
    setRandomImg( data[0].url );
  };

  const onRefresh = () => {
    setRefreshing( true );
    getRandom();
    setTimeout(() => {
      setRefreshing( false );
    }, 1000);
  };

  return {
    randomImg,
    dimensions,
    refreshing,
    onRefresh,
  };
};
