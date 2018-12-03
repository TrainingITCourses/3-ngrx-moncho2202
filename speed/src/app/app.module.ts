import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherContainerComponent } from './searcher-container.component';
import { SearchOptionsPresenterComponent } from './search-options-presenter.component';
import { SearchValuesPresenterComponent } from './search-values-presenter.component';
import { SearchResultPresenterComponent } from './search-result-presenter.component';
import { LaunchEffects } from './reducers/launch.effects';
import { AgencyEffects } from './reducers/agency.effects';
import { MissionTypeEffects } from './reducers/mission-type.effects';
import { StatusEffects } from './reducers/status.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    SearcherContainerComponent,
    SearchOptionsPresenterComponent,
    SearchValuesPresenterComponent,
    SearchResultPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }), !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    EffectsModule.forRoot([LaunchEffects, AgencyEffects, MissionTypeEffects, StatusEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
