import { Component } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = 4;
  title = 'speed';
  constructor(
    public swUpdate: SwUpdate
  ) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg =
            'There is a new version. Do you want to update?';
          if (confirm(msg)) window.location.reload();
        }
      );
    }
  }

  checkForUpdates() {
    this.swUpdate.checkForUpdate().then();
  }

}
