import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-check-country',
  templateUrl: './check-country.component.html',
  styleUrls: ['./check-country.component.css'],
})
export class CheckCountryComponent implements OnInit {
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
        switchMap(({ id }) => this.countryService.getCountryByAlpha(id))
      )
      .subscribe(([ resp ]) => {
        console.log(resp);
      });
  }
}
