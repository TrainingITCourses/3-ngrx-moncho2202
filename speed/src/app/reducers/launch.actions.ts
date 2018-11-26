import { Action } from '@ngrx/store';
import { Launch } from '../store/models/launch';

export enum LaunchActionTypes {
  LoadLaunches = '[Launch] Load Launches',
  LaunchesLoaded = '[Launch] Launches Loaded',
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
}

export class LaunchesLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesLoaded;
  constructor(readonly payload: Launch[]) {}
}

export type LaunchActions = LoadLaunches | LaunchesLoaded;
