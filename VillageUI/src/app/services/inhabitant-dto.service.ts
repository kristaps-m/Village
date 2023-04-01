import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IInhabitantDTO } from '../models/InhabitantDTO';

@Injectable({
  providedIn: 'root',
})
export class InhabitantDtoService {
  private toUpdate = 'update';
  constructor(private http: HttpClient) {}

  public getInhabitantByApartmentIdDTOs(
    id: number
  ): Observable<IInhabitantDTO[]> {
    let x = this.http.get<IInhabitantDTO[]>(
      `${environment.apiUri}/inhabitant/apartment/${id}`
    );

    return x;
  }

  public updateInhabitantDTOs(
    inhabitant: IInhabitantDTO
  ): Observable<IInhabitantDTO> {
    let x = this.http.put<IInhabitantDTO>(
      `${environment.apiUri}/inhabitant/${this.toUpdate}?id=${inhabitant.id}`,
      inhabitant
    );

    return x;
  }

  public createInhabitantDTOs(
    inhabitant: IInhabitantDTO
  ): Observable<IInhabitantDTO> {
    let x = this.http.post<IInhabitantDTO>(
      `${environment.apiUri}/inhabitant/add`,
      inhabitant
    );

    return x;
  }

  public deleteInhabitantDTOs(
    inhabitant: IInhabitantDTO
  ): Observable<IInhabitantDTO> {
    let x = this.http.delete<IInhabitantDTO>(
      `${environment.apiUri}/inhabitant/${inhabitant.id}`
    );

    return x;
  }
}
