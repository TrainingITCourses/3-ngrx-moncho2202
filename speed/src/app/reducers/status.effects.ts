import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { StatusActionTypes, StatusLoaded } from './status.actions';
import { ApiService } from '../api.service';


@Injectable()
export class StatusEffects {
  @Effect() public load$ = this.actions$.ofType(StatusActionTypes.LoadStatus).pipe(
    mergeMap(() => this.api.getStatus().pipe(
      map(status => new StatusLoaded(status))
      )
    ));
  constructor(private actions$: Actions, private api: ApiService) {}
}
