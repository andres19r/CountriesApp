import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  activeRegion: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  activateRegion(region: string) {
    this.activeRegion = region
    // TODO: make the call to the service
  }

}
