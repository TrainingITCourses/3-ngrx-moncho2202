import { SearchCriteriaActions, SearchCriteriaActionTypes } from './search-criteria.actions';


export interface SearchCriteriaState {
  option: string;
  value: number;
}

export const initialState: SearchCriteriaState = {
  option: '',
  value: 0,
};

export function reducer(state = initialState, action: SearchCriteriaActions): SearchCriteriaState {
  switch (action.type) {
    case SearchCriteriaActionTypes.SelectOption:
      return { ...state, option: action.payload };
    case SearchCriteriaActionTypes.SelectValue:
      return { ...state, value: +action.payload };
    default:
      return state;
  }
}
