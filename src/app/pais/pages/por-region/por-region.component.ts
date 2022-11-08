import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin: 2px 5px
      }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  //regiones: string[] = ["EU", "EFTA ", "CARICO", "PA ", "AU ", "USAN ", "EEU ", "AL ", "ASEAN ", "CAIS ", "CEFTA ", "NAFTA ", "SAARC "];
  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = "";
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (this.regionActiva === region) return;
    this.regionActiva = region;
    //this.paisService.getCountryByRegion(region === "americas" ? 'ame' : region)
    this.paisService.getCountryByRegion(region)
      .subscribe(paises => this.paises = paises);
    console.log(this.regionActiva, this.paises)
  }

}
