import { Status } from '../store/models/status';
import { StatusActions, StatusActionTypes } from './status.actions';


export interface StatusState {
  status: Status[];
}

export const initialState: StatusState = {
  status: [],
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  switch (action.type) {
    case StatusActionTypes.LoadStatus:
      return { ...state };
    case StatusActionTypes.StatusLoaded:
      return { status: action.payload };
    default:
      return state;
  }
}
