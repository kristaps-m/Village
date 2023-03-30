import { Component } from '@angular/core';
import { ApartmentDtoService } from '../../services/apartment-dto.service';
import { ActivatedRoute } from '@angular/router';
import { IApartmentDTO } from 'src/app/models/ApartmentDTO';
import { Observable } from 'rxjs';
import { IInhabitantDTO } from 'src/app/models/InhabitantDTO';
import { InhabitantDtoService } from 'src/app/services/inhabitant-dto.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
})
export class ApartmentComponent {
  oneApartment: Observable<IApartmentDTO> | undefined;
  inhabitantDTOsByApartmentId: IInhabitantDTO[] = [];

  constructor(
    private route: ActivatedRoute,
    private ApartmentDtoService: ApartmentDtoService,
    private InhabitantDtoService: InhabitantDtoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      //console.log(params);
      // const id = params['id'];
      const id = params.get('id');
      //console.log(params['id'], +params['id']);
      if (id) {
        const apartment = this.ApartmentDtoService.getOneApartment(+id);
        this.oneApartment = apartment;

        this.InhabitantDtoService.getInhabitantByApartmentIdDTOs(+id).subscribe(
          (result: IInhabitantDTO[]) =>
            (this.inhabitantDTOsByApartmentId = result)
        );
        // this.houseApartments =
        //   this.HouseApartmentService.getSpecialHouseApartment(+id);
        //this.oneHouse.city = house.city;
        // this.HouseApartmentService.getSpecialHouseApartment(+id).subscribe(
        //   (result: IHouseApartment[]) => (this.houseApartments = result)
        // );

        // this.ApartmentDtoService.getApartmentDTOs().subscribe(
        //   (result: IApartmentDTO[]) => (this.apartmentDTOs = result)
        // );

        // this.ApartmentDtoService.getApartmentByHouseIdDTOs(+id).subscribe(
        //   (result: IApartmentDTO[]) => (this.apartmentDTOsByHouseId = result)
        // );
        // for (let i = 0; i < this.houseApartments.length; i++) {
        //   console.log(this.houseApartments[i].houseId, "<-- one HA");
        // }
        // console.log(
        //   this.houseApartments,
        //   '<--- this.houseApartments',
        //   this.houseApartments.length
        // );
      }
    });
  }
}
