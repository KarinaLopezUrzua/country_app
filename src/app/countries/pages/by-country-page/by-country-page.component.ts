import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countriesP: Country[] = []; //propiedad para mostrar en el html

  constructor(private countriesService: CountriesService) {}

  searchByCountry(country: string): void {
    this.countriesService.searchCountry(country).subscribe((countries) => { // función de devolución de llamada (callback)
      this.countriesP = countries;
    });
  }
}
