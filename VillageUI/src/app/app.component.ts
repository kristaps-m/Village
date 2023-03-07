import { Component } from '@angular/core';
import { HouseDTO } from './models/HouseDTO';
import {HouseDTOService} from './services/house-dto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'VillageUI';
  houseDTOs: HouseDTO[] = [];

  constructor(private HouseDTOService: HouseDTOService){}

  ngOnInit(): void {
    this.houseDTOs = this.HouseDTOService.getHouseDTOs();
    console.log(this.houseDTOs)
  }
}
