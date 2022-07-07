import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCountryComponent } from './check-country.component';

describe('CheckCountryComponent', () => {
  let component: CheckCountryComponent;
  let fixture: ComponentFixture<CheckCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
