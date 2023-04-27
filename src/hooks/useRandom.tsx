
import { useEffect, useState } from 'react';
import catApi from '../api/catApi';
import { Cat } from 'src/interfaces/cat';

export const useRandom = () => {

  const [ randomImg, setRandomImg ] = useState(null as string | null);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async() => {
    const { data } = await catApi.get<Cat>('images/search');
    console.log(data);
    setRandomImg( data.url );
  };

  return {
    randomImg,
  };
};
