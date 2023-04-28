import { CatState } from './CatContext';
import { Cat } from '../interfaces/cat';

type CatAction =
| { type: 'addCat', payload: Cat }
| { type: 'setIsLoading', payload: boolean }

export const catReducer = ( state: CatState, action: CatAction ): CatState => {
  switch (action.type) {
    case 'addCat':
      return {
        ...state,
        cats: [ ...state.cats, action.payload ],
      };
    default:
    return state;
  }
};
