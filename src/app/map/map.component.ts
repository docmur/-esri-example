import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `<app-esri-map></app-esri-map>`,
  styles: [
  ]
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
