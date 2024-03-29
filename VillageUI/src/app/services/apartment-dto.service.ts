import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApartmentDTO } from '../models/ApartmentDTO';

@Injectable({
  providedIn: 'root',
})
export class ApartmentDtoService {
  private urlGetAll = 'all'; // Get allApartmentDTO
  private toUpdate = 'update';

  constructor(private http: HttpClient) {}

  public getApartmentDTOs(): Observable<IApartmentDTO[]> {
    let x = this.http.get<IApartmentDTO[]>(
      `${environment.apiUri}/apartment/${this.urlGetAll}`
    );

    return x;
  }

  public getApartmentByHouseIdDTOs(id: number): Observable<IApartmentDTO[]> {
    let x = this.http.get<IApartmentDTO[]>(
      `${environment.apiUri}/apartment/house/${id}`
    );

    return x;
  }

  public getOneApartment(id: number): Observable<IApartmentDTO> {
    let x = this.http.get<IApartmentDTO>(
      `${environment.apiUri}/apartment/${id}`
    );

    return x;
  }

  public updateApartmentDTOs(
    apartment: IApartmentDTO
  ): Observable<IApartmentDTO> {
    let x = this.http.put<IApartmentDTO>(
      `${environment.apiUri}/apartment/${this.toUpdate}?id=${apartment.id}`,
      apartment
    );

    return x;
  }

  public createApartmentDTOs(
    apartment: IApartmentDTO
  ): Observable<IApartmentDTO> {
    let x = this.http.post<IApartmentDTO>(
      `${environment.apiUri}/apartment/add`,
      apartment
    );

    return x;
  }

  // Creates 1 Apartment, 1 HouseApartment (with House ID and Apartment ID)
  public createApartmentInsideHouse(
    apartment: IApartmentDTO,
    theHouseId: number
  ): Observable<IApartmentDTO> {
    let x = this.http.post<IApartmentDTO>(
      `${environment.apiUri}/apartment/add/house/${theHouseId}`,
      apartment
    );

    return x;
  }

  public deleteApartmentDTOs(
    apartment: IApartmentDTO
  ): Observable<IApartmentDTO> {
    let x = this.http.delete<IApartmentDTO>(
      `${environment.apiUri}/apartment/${apartment.id}`
    );

    return x;
  }

  public deleteApartmentAndHouseApartmentDTOs(
    apartment: IApartmentDTO
  ): Observable<IApartmentDTO> {
    let x = this.http.delete<IApartmentDTO>(
      `${environment.apiUri}/apartment/del-apartment-houseapartment/${apartment.id}`
    );

    return x;
  }
}
