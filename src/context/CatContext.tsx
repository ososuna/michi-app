import React, { createContext, useReducer } from 'react';
import { catReducer } from './catReducer';
import { Cat } from 'src/interfaces/cat';

export interface CatState {
  cats: Cat[];
}

export const catInitialState: CatState = {
  cats: [],
};

export interface CatContextProps {
  catState: CatState;
  addCat: (cat: Cat) => void;
}

export const CatContext = createContext({} as CatContextProps);

export const CatProvider = ({ children }: { children: JSX.Element }) => {

  const [ catState, dispatch ] = useReducer(catReducer, catInitialState);

  const addCat = (cat: Cat) => {
    dispatch({ type: 'addCat', payload: cat });
  };

  return (
    <CatContext.Provider value={{ catState, addCat }}>
      { children }
    </CatContext.Provider>
  );
};
