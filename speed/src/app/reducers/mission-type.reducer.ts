import { MissionType } from '../store/models/mission-type';
import { MissionTypeActions, MissionTypeActionTypes } from './mission-type.actions';


export interface MissionTypesState {
  missionTypes: MissionType[];
}

export const initialState: MissionTypesState = {
  missionTypes: [],
};

export function reducer(state = initialState, action: MissionTypeActions): MissionTypesState {
  switch (action.type) {
    case MissionTypeActionTypes.LoadMissionTypes:
      return { ...state };
    case MissionTypeActionTypes.MissionTypesLoaded:
      return { missionTypes: action.payload };
    default:
      return state;
  }
}
