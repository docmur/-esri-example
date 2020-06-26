import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div>
      <button (click)="blankRoute()">Blank</button>
      <button (click)="mapRoute()">Map</button>
      <button (click)="blahRoute()">Blah</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'esri-example';

  constructor(private router: Router) {
  }

  blankRoute() {
    this.router.navigate([""]);
  }

  mapRoute() {
    this.router.navigate(["MAP"]);
  }

  blahRoute() {
    this.router.navigate(["BLAH"]);
  }
}
