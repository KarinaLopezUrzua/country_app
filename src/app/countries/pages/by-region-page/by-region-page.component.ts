import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countriesP: Country[] = []; //propiedad para mostrar en el html

  constructor(private countriesService: CountriesService) {}

  searchByRegion(region: string): void {
    this.countriesService.searchRegion(region).subscribe((countries) => { // función de devolución de llamada (callback)
      this.countriesP = countries;
    });
  }
}
