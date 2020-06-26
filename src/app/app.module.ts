import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EsriMapComponent} from "./esri-map/esri-map.component";
import { AppComponent } from './app.component';
import { BlahComponent } from './blah/blah.component';
import { MapComponent } from './map/map.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    BlahComponent,
    MapComponent,
    EsriMapComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
