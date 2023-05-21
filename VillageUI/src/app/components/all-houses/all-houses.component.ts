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
  isLoading: boolean = true;

  constructor(
    private HouseDTOService: HouseDTOService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.HouseDTOService.getHouseDTOs().subscribe(
    (result: IHouseDTO[]) => {this.houseDTOs = result;this.isLoading = false;}
    );
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

  updateOneHouse(h: IHouseDTO) {
    this.houseToEdit = h;
  }

  goToHome(homeID?: number) {
    this.router.navigate([`${homeID}`]);
  }
}
