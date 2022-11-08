import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
      .small-flag {
        width: 50px;
      }
    `
  ]
})
export class PaisTablaComponent {

  @Input() paises: Country[] = [];

  constructor() { }



}
