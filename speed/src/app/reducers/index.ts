import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../environments/environment';

import * as fromLaunch from './launch.reducer';
import * as fromAgency from './agency.reducer';
import * as fromStatus from './status.reducer';
import * as fromMissionType from './mission-type.reducer';
import * as fromSearchCriteria from './search-criteria.reducer';

export interface State {
  router: any;
  launch: fromLaunch.LaunchesState;
  agency: fromAgency.AgenciesState;
  status: fromStatus.StatusState;
  missionType: fromMissionType.MissionTypesState;
  searchCriteria: fromSearchCriteria.SearchCriteriaState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  launch: fromLaunch.reducer,
  agency: fromAgency.reducer,
  status: fromStatus.reducer,
  missionType: fromMissionType.reducer,
  searchCriteria: fromSearchCriteria.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
