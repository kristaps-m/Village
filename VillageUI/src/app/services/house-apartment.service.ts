import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHouseApartment } from '../models/HouseApartment';

@Injectable({
  providedIn: 'root',
})
export class HouseApartmentService {
  private urlGetAll = 'all'; // Get all House - Apartment

  constructor(private http: HttpClient) {}

  public getHouseApartment(): Observable<IHouseApartment[]> {
    let x = this.http.get<IHouseApartment[]>(
      `${environment.apiUri}/houseapartment/${this.urlGetAll}`
    );
    //console.log(this.test, 'test <-------------');
    return x;
  }

  public getSpecialHouseApartment(id: number): Observable<IHouseApartment[]> {
    let x = this.http.get<IHouseApartment[]>(
      `${environment.apiUri}/houseapartment/${this.urlGetAll}/${id}`
    );
    //console.log(this.test, 'test <-------------');
    return x;
  }

  public deleteHouseApartmentDTOs(
    houseApartment: IHouseApartment
  ): Observable<IHouseApartment> {
    let x = this.http.delete<IHouseApartment>(
      `${environment.apiUri}/houseapartment/${houseApartment.id}`
    );

    return x;
  }
}
