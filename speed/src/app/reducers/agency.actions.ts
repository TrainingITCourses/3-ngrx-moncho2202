import { Action } from '@ngrx/store';
import { Agency } from '../store/models/agency';

export enum AgencyActionTypes {
  LoadAgencies = '[Agency] Load Agencies',
  AgenciesLoaded = '[Agency] Agencies Loaded',
}

export class LoadAgencies implements Action {
  readonly type = AgencyActionTypes.LoadAgencies;
}

export class AgenciesLoaded implements Action {
  readonly type = AgencyActionTypes.AgenciesLoaded;
  constructor(readonly payload: Agency[]) {}
}

export type AgencyActions = LoadAgencies | AgenciesLoaded;
