import { Component } from '@angular/core';
import { HouseDTO, IHouseDTO } from '../../models/HouseDTO';
import { HouseDTOService } from '../../services/house-dto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css'],
})
export class AllHousesComponent {
  title = 'VillageUI';
  // houseDTOs: HouseDTO[] = [];
  houseDTOs: IHouseDTO[] = [];
  houseToEdit?: IHouseDTO;
  //X:any[] = [];
  //test: HouseDTO = new HouseDTO();
  //test.City = "Liepaja"
  // 46:16 Created API controller get all.

  constructor(
    private HouseDTOService: HouseDTOService,
    private router: Router
  ) {
    // this.HouseDTOService.getData().subscribe((data: any) => {
    //   this.houseDTOs = data;
    // });
    // this.houseDTOs.forEach(element => {
    //   console.log(element);
    //   this.X.push(element);
    // });
  }

  updateHouseList(home: IHouseDTO[]) {
    this.houseDTOs = home;
  }

  initNewHouse() {
    this.houseToEdit = new HouseDTO();
  }

  editHouse(house: IHouseDTO) {
    this.houseToEdit = house;
  }

  ngOnInit(): void {
    this.HouseDTOService.getHouseDTOs().subscribe(
      (result: IHouseDTO[]) => (this.houseDTOs = result)
    );
    // this.HouseDTOService.getLiveStream(1).subscribe(
    //   (result:HouseDTO) =>(this.test = result)
    //   );
    //this.houseDTOs.push(this.test);
    //console.log(this.houseDTOs, "Apple is now available");
  }

  goToHome(homeID?: number) {
    this.router.navigate([`${homeID}`]);
  }
}
