import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-check-country',
  templateUrl: './check-country.component.html',
  styleUrls: ['./check-country.component.css'],
})
export class CheckCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);
    //     this.countryService.getCountryByAlpha(id)
    //       .subscribe(country => console.log(country[0]))
    // });

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByAlpha(id)),
        tap(console.log)
      )
      .subscribe(([ country ]) => this.country = country);
  }
}
