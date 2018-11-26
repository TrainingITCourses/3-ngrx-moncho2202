import { Action } from '@ngrx/store';
import { Status } from '../store/models/status';

export enum StatusActionTypes {
  LoadStatus = '[Status] Load Status',
  StatusLoaded = '[Status] Status Loaded',
}

export class LoadStatus implements Action {
  readonly type = StatusActionTypes.LoadStatus;
}

export class StatusLoaded implements Action {
  readonly type = StatusActionTypes.StatusLoaded;
  constructor(readonly payload: Status[]) {}
}

export type StatusActions = LoadStatus | StatusLoaded;
