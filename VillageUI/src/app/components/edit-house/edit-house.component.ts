import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HouseDTO, IHouseDTO } from 'src/app/models/HouseDTO';
import { HouseDTOService } from 'src/app/services/house-dto.service';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css'],
})
export class EditHouseComponent {
  @Input() house?: IHouseDTO;
  @Output() homeUpdated = new EventEmitter<IHouseDTO>();

  constructor(private houseDTOService: HouseDTOService) {}

  updateHouse(house: IHouseDTO) {
    this.houseDTOService.updateHouseDTOs(house).subscribe(
      (home: IHouseDTO) => {
        alert(`House with number '${home.number}' updated successfully!`);
        this.homeUpdated.emit(home);
      },
      (error) => {
        alert(`Failed to update house! Error: ${error.message}`);
      }
    );
  }

  deleteHouse(house: IHouseDTO) {
    this.houseDTOService
      .deleteHouseDTOs(house)
      .subscribe((home: IHouseDTO) => this.homeUpdated.emit(home));
  }

  createHouse(house: IHouseDTO) {
    this.houseDTOService
      .createHouseDTOs(house)
      .subscribe((home: IHouseDTO) => this.homeUpdated.emit(home));
  }
}
