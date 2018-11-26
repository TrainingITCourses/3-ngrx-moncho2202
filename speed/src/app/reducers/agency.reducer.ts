import { Agency } from '../store/models/agency';
import { AgencyActions, AgencyActionTypes } from './agency.actions';


export interface AgenciesState {
  agencies: Agency[];
}

export const initialState: AgenciesState = {
  agencies: [],
};

export function reducer(state = initialState, action: AgencyActions): AgenciesState {
  switch (action.type) {
    case AgencyActionTypes.LoadAgencies:
      return { ...state };
    case AgencyActionTypes.AgenciesLoaded:
      return { agencies: action.payload };
    default:
      return state;
  }
}
