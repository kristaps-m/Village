import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HouseDTO, IHouseDTO } from '../models/HouseDTO';

@Injectable({
  providedIn: 'root',
})
export class HouseDTOService {
  private urlGetAll = 'all-houses'; // Get allHouseDTO
  private toUpdate = 'update';
  constructor(private http: HttpClient) {}

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

  // public getHouseDTOs(): Observable<IHouseDTO[]> {
  //   let x = this.http.get<IHouseDTO[]>(
  //     `${environment.apiUri}/house/${this.urlGetAll}`
  //   );

  //   return x;
  // }
  public getHouseDTOs(): Observable<IHouseDTO[]> {
    // Get the JWT token from your authentication service or storage
    const token = 'YOUR_JWT_TOKEN';
    // Replace with your actual token retrieval logic

    // Add the authorization header with the bearer token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<IHouseDTO[]>(
      `${environment.apiUri}/house/${this.urlGetAll}`,
      {
        headers: headers,
      }
    );
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
}
