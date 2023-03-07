import { Injectable } from '@angular/core';
import { HouseDTO } from '../models/HouseDTO';

@Injectable({
  providedIn: 'root',
})
export class HouseDTOService {
  constructor() {}

  public getHouseDTOs(): HouseDTO[] {
    let houseDTO = new HouseDTO();
    houseDTO.Id = 1;
    houseDTO.Number = 66;
    houseDTO.Street = "Street";
    houseDTO.City = "City";
    houseDTO.Country = "Country";

    return [houseDTO];
  }
}
