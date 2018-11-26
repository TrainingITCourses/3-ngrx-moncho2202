import { Action } from '@ngrx/store';
import { MissionType } from '../store/models/mission-type';

export enum MissionTypeActionTypes {
  LoadMissionTypes = '[MissionType] Load MissionTypes',
  MissionTypesLoaded = '[MissionType] MissionTypes Loaded',
}

export class LoadMissionTypes implements Action {
  readonly type = MissionTypeActionTypes.LoadMissionTypes;
}

export class MissionTypesLoaded implements Action {
  readonly type = MissionTypeActionTypes.MissionTypesLoaded;
  constructor(readonly payload: MissionType[]) {}
}

export type MissionTypeActions = LoadMissionTypes | MissionTypesLoaded;
