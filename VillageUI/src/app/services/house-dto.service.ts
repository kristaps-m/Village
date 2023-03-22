import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HouseDTO, IHouseDTO } from '../models/HouseDTO';

@Injectable({
  providedIn: 'root',
})
export class HouseDTOService {
  private urlGetAll = 'all-houses'; // Get allHouseDTO
  private toUpdate = 'update';
  private apiUri = `https://localhost:7224`;
  //console.log(test);
  constructor(private http: HttpClient) {}

  // getData() {
  //   let url = 'https://localhost:7224/house/all';
  //   // let url = 'https://dummyjson.com/products';
  //   // let url = "https://jsonplaceholder.typicode.com/posts";
  //   return this.http.get(url);
  // }

  public getHouseDTOs(): Observable<HouseDTO[]> {
    let x = this.http.get<HouseDTO[]>(`${this.apiUri}/house/${this.urlGetAll}`);
    //console.log(this.test, 'test <-------------');
    return x;
  }

  public updateHouseDTOs(house: IHouseDTO): Observable<HouseDTO[]> {
    let x = this.http.put<HouseDTO[]>(
      `${this.apiUri}/house/${this.toUpdate}`,
      house
    );
    //console.log(this.test, 'test <-------------');
    return x;
  }

  public createHouseDTOs(house: IHouseDTO): Observable<HouseDTO[]> {
    let x = this.http.put<HouseDTO[]>(`${this.apiUri}/house/add`, house);
    //console.log(this.test, 'test <-------------');
    return x;
  }

  public deleteHouseDTOs(house: IHouseDTO): Observable<HouseDTO[]> {
    let x = this.http.delete<HouseDTO[]>(`${this.apiUri}/house/${house.id}`);
    //console.log(this.test, 'test <-------------');
    return x;
  }

  // getLiveStream(id: number): Observable<HouseDTO> {
  //   const url = `https://localhost:7224/house/${id}`;
  //   return this.http.get<HouseDTO>(url);
  // }
}
