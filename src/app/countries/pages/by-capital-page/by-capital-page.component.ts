import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {

  public countriesP: Country[] = []; //propiedad para mostrar en el html

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe((countries) => { // función de devolución de llamada (callback)
      this.countriesP = countries;
    });
  }
}
