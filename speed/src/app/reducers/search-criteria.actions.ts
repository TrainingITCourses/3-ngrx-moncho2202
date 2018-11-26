import { Action } from '@ngrx/store';

export enum SearchCriteriaActionTypes {
  SelectOption = '[SearchCriteria] Select Option',
  SelectValue = '[SearchCriteria] Select Value',
}

export class SelectOption implements Action {
  readonly type = SearchCriteriaActionTypes.SelectOption;
  constructor(readonly payload: string) {}
}

export class SelectValue implements Action {
  readonly type = SearchCriteriaActionTypes.SelectValue;
  constructor(readonly payload: number) {}
}

export type SearchCriteriaActions = SelectOption | SelectValue;
