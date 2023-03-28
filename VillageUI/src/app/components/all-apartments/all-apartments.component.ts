import { Component } from '@angular/core';
import { IApartmentDTO } from 'src/app/models/ApartmentDTO';
import { ApartmentDtoService } from '../../services/apartment-dto.service';
import { Router } from '@angular/router';
import { HouseApartmentService } from '../../services/house-apartment.service';
import { IHouseApartment } from 'src/app/models/HouseApartment';

@Component({
  selector: 'app-all-apartments',
  templateUrl: './all-apartments.component.html',
  styleUrls: ['./all-apartments.component.css'],
})
export class AllApartmentsComponent {
  apartmentDTOs: IApartmentDTO[] = [];
  houseApartments:IHouseApartment[] =[];

  constructor(
    private ApartmentDtoService: ApartmentDtoService,
    private HouseApartmentService:HouseApartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ApartmentDtoService.getApartmentDTOs().subscribe(
      (result: IApartmentDTO[]) => (this.apartmentDTOs = result)
    );
    this.HouseApartmentService.getHouseApartment().subscribe(
      (result: IHouseApartment[]) => (this.houseApartments = result)
    );
  }

  // getHouseApartment(): void {
  //   this.HouseApartmentService.getHouseApartment().subscribe(
  //     (result: IHouseApartment[]) => (this.houseApartments = result)
  //   );
  // }
}
