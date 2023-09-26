import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHouseDTO } from '../models/HouseDTO';

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
    return this.http.get<IHouseDTO>(`${environment.apiUri}/house/${id}`);
  }

  /*
        GET ALL HOUSES. BELOW ! ---------------------------------------------------
  */

  public getHouseDTOs(): Observable<IHouseDTO[]> {
    return this.http.get<IHouseDTO[]>(
      `${environment.apiUri}/house/${this.urlGetAll}`
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
    return this.http.post<IHouseDTO>(`${environment.apiUri}/house/add`, house);
  }

  public deleteHouseDTOs(house: IHouseDTO): Observable<IHouseDTO> {
    return this.http.delete<IHouseDTO>(
      `${environment.apiUri}/house/${house.id}`
    );
  }
}
