import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApiService } from './api.service';
import { Launch } from './store/models/launch';
import { Agency } from './store/models/agency';
import { MissionType } from './store/models/mission-type';
import { Status } from './store/models/status';
import { State } from './reducers';
import { LoadLaunches } from './reducers/launch.actions';
import { LoadAgencies } from './reducers/agency.actions';
import { LoadMissionTypes } from './reducers/mission-type.actions';
import { LoadStatus } from './reducers/status.actions';
import { SelectOption, SelectValue } from './reducers/search-criteria.actions';

@Component({
  selector: 'app-searcher-container',
  template: `
      <app-search-options-presenter
              (option)="onSelectedOption($event)">
      </app-search-options-presenter>
      <app-search-values-presenter
              [searchValues]="selectedSearchValues"
              (value)="onSelectedValue($event)">
      </app-search-values-presenter>
      <app-search-result-presenter
              [launches]="filteredLaunches">
      </app-search-result-presenter>
  `,
  styles: []
})
export class SearcherContainerComponent implements OnInit {
  public selectedSearchValues: Agency[] | MissionType[] | Status[] = [];
  public filteredLaunches: Launch[] = [];
  public launches: Launch[] = [];
  public agencies: Agency[] = [];
  public missionTypes: MissionType[] = [];
  public status: Status[] = [];
  public option = '';
  public value = 0;

  constructor(private api: ApiService, private store: Store<State>) { }

  ngOnInit() {
    this.initData();
    this.store.select(s => s.launch)
      .subscribe(launch => {
        this.launches = launch.launches;
      });
    this.store.select(s => s.agency)
      .subscribe(agency => {
        this.agencies = agency.agencies;
      });
    this.store.select(s => s.missionType)
      .subscribe(missionType => {
        this.missionTypes = missionType.missionTypes;
      });
    this.store.select(s => s.status)
      .subscribe(status => {
        this.status = status.status;
      });
    this.store.select(s => s.searchCriteria.option)
      .subscribe(option => {
        this.option = option;
        this.filteredLaunches = [];
        this.selectedSearchValues = this.selectSearchValues(this.option);
      });
    this.store.select(s => s.searchCriteria.value)
      .subscribe(value => {
        this.value = value;
        this.filteredLaunches = this.filterLaunches(
          this.option,
          this.value,
          this.launches);
      });
  }

  private initData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadAgencies());
    this.store.dispatch(new LoadMissionTypes());
    this.store.dispatch(new LoadStatus());
  }

  public onSelectedOption($event) {
    this.store.dispatch(new SelectOption($event));
  }

  public onSelectedValue($event) {
    this.store.dispatch(new SelectValue($event));
  }

  private selectSearchValues(option: string): Agency[] | MissionType[] | Status[] {
    switch (option) {
      case 'agencies':
        return this.agencies;
      case 'types':
        return this.missionTypes;
      case 'status':
        return this.status;
      default:
        return [];
    }
  }

  private filterLaunches(option: string, value: number, launches: Launch[]): Launch[] {
    switch (option) {
      case 'agencies':
        return this.filterByAgency(value, launches);
      case 'types':
        return this.filterByType(value, launches);
      case 'status':
        return this.filterByStatus(value, launches);
      default:
        return [];
    }
  }

  private filterByAgency(value: number, launches: Launch[]) {
    return launches.filter(launch =>
      launch.location.pads.some( pad =>
        pad.agencies && pad.agencies.some(agency => agency.id === value)
      )
      || launch.rocket.agencies && launch.rocket.agencies.some(agency =>
      agency.id === value
      )
      || launch.missions.some( mission =>
      mission.agencies && mission.agencies.some(agency => agency.id === value)
      )
    );
  }

  private filterByType(value: number, launches: Launch[]) {
    return launches.filter(launch =>
      launch.missions[0] && launch.missions[0].type === value
      // launch.missions.some( mission => mission.type == value )
    );
  }

  private filterByStatus(value: number, launches: Launch[]) {
    return launches.filter(launch =>
      launch.status === value
    );
  }

}
