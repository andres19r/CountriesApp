import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {
  countries: Country[] = []
  term: string = ''
  thereIsError: boolean = false

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search(term: string): void {
    this.thereIsError = false
    this.term = term
    this.countryService.searchCapital(this.term)
      .subscribe({
        next: countries => this.countries = countries,
        error: err => {
          this.thereIsError = true
          this.countries = []
        }
      })
  }

}
