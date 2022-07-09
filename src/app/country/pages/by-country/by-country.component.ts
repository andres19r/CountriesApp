import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {
  term: string = ''
  thereIsError: boolean = false
  countries: Country[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(term: string): void {
    this.thereIsError = false
    this.term = term
    this.countryService.searchCountry(this.term)
      .subscribe({
        next: countries => {
          this.countries = countries
        },
        error: err => {
          this.thereIsError = true
          this.countries = []
        }
      })
  }

}
