import { Component } from '@angular/core';
import { HouseDTO } from './models/HouseDTO';
import { HouseDTOService } from './services/house-dto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'VillageUI';
  houseDTOs: HouseDTO[] = [];
  test: HouseDTO = new HouseDTO();
  //test.City = "Liepaja"

  constructor(private HouseDTOService: HouseDTOService) {}

  ngOnInit(): void {
    this.HouseDTOService.getHouseDTOs().subscribe(
      (result: HouseDTO[]) => (this.houseDTOs = result)
    );
    //this.houseDTOs.push(this.test);
    console.log(this.houseDTOs, "Apple is now available");
  }
}
