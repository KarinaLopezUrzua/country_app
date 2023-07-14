import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient
      .get<Country[]>(url)
      .pipe(catchError((error) => of([])));
  }
  // esta es otra forma de dejarlo sin una variable
  // searchByCapital(term: string): Observable<Country[]> {
  //   return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/ ${term}`);
  // }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.httpClient
      .get<Country[]>(url)
      .pipe(catchError((error) => of([])));
  }

  searchCountry(name: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${name}`;
    return this.httpClient
      .get<Country[]>(url)
      .pipe(catchError((error) => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient
      .get<Country[]>(url)
      .pipe(catchError((error) => of([])));
  }
}
