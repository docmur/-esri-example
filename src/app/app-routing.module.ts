import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlahComponent } from "./blah/blah.component";
import {MapComponent} from "./map/map.component";
import {BlankComponent} from "./blank/blank.component";

const routes: Routes = [
    {
      path: "",
      component: BlankComponent
    },
    {
        path: "MAP",
        component: MapComponent
    },
    {
      path: "BLAH",
      component: BlahComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
