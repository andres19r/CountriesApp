import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {
  term: string = ''
  thereIsError: boolean = false

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.thereIsError = false
    console.log(this.term);
    this.countryService.searchCountry(this.term)
      .subscribe({
        next: countries => {
          console.log(countries)
        },
        error: err => {
          this.thereIsError = true
        }
      })
  }

}
