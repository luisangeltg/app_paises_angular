import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `
      .small-flag {
        width: 50px;
      }
      .mr-1 {
        margin-right: 5px!important;
      }
    `
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.getCountryById(id)))
      .subscribe((resp: Country) => { this.pais = resp; console.log(this.pais.translations) });
  }

}
