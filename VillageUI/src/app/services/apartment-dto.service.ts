import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public getOneApartment(id:number): Observable<IApartmentDTO> {
    let x = this.http.get<IApartmentDTO>(
      `${environment.apiUri}/apartment/${id}`
    );
    
    return x;
  }
}
