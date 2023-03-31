import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs/internal/Observable';
import { HouseDTO, IHouseDTO } from '../models/HouseDTO';

@Injectable({
  providedIn: 'root',
})
export class HouseDTOService {
  private urlGetAll = 'all-houses'; // Get allHouseDTO
  private toUpdate = 'update';
  //private apiUri = `https://localhost:7224`;
  //console.log(test);
  constructor(private http: HttpClient) {}

  // getData() {
  //   let url = 'https://localhost:7224/house/all';
  //   // let url = 'https://dummyjson.com/products';
  //   // let url = "https://jsonplaceholder.typicode.com/posts";
  //   return this.http.get(url);
  // }

  /*
        GET >> 1 << HOUSE. BELOW ! ---------------------------------------------------
  */

  public getOneHouse(id: number): Observable<IHouseDTO> {
    let x = this.http.get<IHouseDTO>(`${environment.apiUri}/house/${id}`);
    console.log(x, '<----- ONE HOUSE TEST');
    return x;
  }

  /*
        GET ALL HOUSES. BELOW ! ---------------------------------------------------
  */

  public getHouseDTOs(): Observable<IHouseDTO[]> {
    let x = this.http.get<IHouseDTO[]>(
      `${environment.apiUri}/house/${this.urlGetAll}`
    );
    
    return x;
  }
  // update, create, delete ... from IHouseDTO[] to IHouseDTO
  public updateHouseDTOs(house: IHouseDTO): Observable<IHouseDTO> {
    let x = this.http.put<IHouseDTO>(
      `${environment.apiUri}/house/${this.toUpdate}`,
      house
    );
    
    return x;
  }

  public createHouseDTOs(house: IHouseDTO): Observable<IHouseDTO> {
    let x = this.http.post<IHouseDTO>(`${environment.apiUri}/house/add`, house);
    
    return x;
  }

  public deleteHouseDTOs(house: IHouseDTO): Observable<IHouseDTO> {
    let x = this.http.delete<IHouseDTO>(
      `${environment.apiUri}/house/${house.id}`
    );
    
    return x;
  }

  // getLiveStream(id: number): Observable<HouseDTO> {
  //   const url = `https://localhost:7224/house/${id}`;
  //   return this.http.get<HouseDTO>(url);
  // }
}
