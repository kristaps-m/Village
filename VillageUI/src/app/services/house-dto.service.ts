import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HouseDTO } from '../models/HouseDTO';

@Injectable({
  providedIn: 'root',
})
export class HouseDTOService {
  private url = 'house/all'; // Get allHouseDTO
  constructor(private http: HttpClient) {}

  public getHouseDTOs(): Observable<HouseDTO[]> {
    // https://localhost:7224 ${environment.apiUri}
    // https://localhost:7224/house/all https://localhost:7224/${this.url}
    // video 32:20
    return this.http.get<HouseDTO[]>(`https://localhost:7224/house/all`);
    // let houseDTO = new HouseDTO();
    // houseDTO.Id = 1;
    // houseDTO.Number = 66;
    // houseDTO.Street = 'Street';
    // houseDTO.City = 'City';
    // houseDTO.Country = 'Country';
    // return [houseDTO];
  }

  getLiveStream(id: number): Observable<HouseDTO> {
    const url = `https://localhost:7224/house/${id}`;
    return this.http.get<HouseDTO>(url);
  }
}
