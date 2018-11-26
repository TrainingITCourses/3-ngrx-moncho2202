import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { AgenciesLoaded, AgencyActionTypes } from './agency.actions';


@Injectable()
export class AgencyEffects {
  @Effect() public load$ = this.actions$.ofType(AgencyActionTypes.LoadAgencies).pipe(
    mergeMap(() => this.api.getAgencies().pipe(
      map(agencies => new AgenciesLoaded(agencies))
      )
    ));
  constructor(private actions$: Actions, private api: ApiService) {}
}
