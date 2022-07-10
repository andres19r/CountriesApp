import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url)
      // .pipe(
      //   catchError(err => of([]))
      // )
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url)
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url)
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
  }
}
