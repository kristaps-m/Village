import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IInhabitantDTO } from '../models/InhabitantDTO';

@Injectable({
  providedIn: 'root',
})
export class InhabitantDtoService {
  constructor(private http: HttpClient) {}

  public getInhabitantByApartmentIdDTOs(
    id: number
  ): Observable<IInhabitantDTO[]> {
    let x = this.http.get<IInhabitantDTO[]>(
      `${environment.apiUri}/inhabitant/apartment/${id}`
    );

    return x;
  }
}
