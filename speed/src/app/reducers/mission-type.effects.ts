import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { MissionTypeActionTypes, MissionTypesLoaded } from './mission-type.actions';


@Injectable()
export class MissionTypeEffects {
  @Effect() public load$ = this.actions$.ofType(MissionTypeActionTypes.LoadMissionTypes).pipe(
    mergeMap(() => this.api.getTypes().pipe(
      map(types => new MissionTypesLoaded(types))
      )
    ));
  constructor(private actions$: Actions, private api: ApiService) {}
}
