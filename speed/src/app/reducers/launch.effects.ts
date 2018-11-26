import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { LaunchActionTypes, LaunchesLoaded } from './launch.actions';
import { ApiService } from '../api.service';


@Injectable()
export class LaunchEffects {
  @Effect() public load$ = this.actions$.ofType(LaunchActionTypes.LoadLaunches).pipe(
    mergeMap(() => this.api.getLaunches().pipe(
      map(launches => new LaunchesLoaded(launches))
      )
    ));
  constructor(private actions$: Actions, private api: ApiService) {}
}
