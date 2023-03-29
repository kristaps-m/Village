import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HouseDTO, IHouseDTO } from 'src/app/models/HouseDTO';
import { HouseDTOService } from 'src/app/services/house-dto.service';
import { HouseApartmentService } from '../../services/house-apartment.service';
import { IHouseApartment } from 'src/app/models/HouseApartment';
import { IApartmentDTO } from 'src/app/models/ApartmentDTO';
import { ApartmentDtoService } from '../../services/apartment-dto.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  oneHouse: Observable<HouseDTO> | undefined;
  houseToEdit?: IHouseDTO;
  houseApartments: IHouseApartment[] = [];
  apartmentDTOsByHouseId: IApartmentDTO[] = [];
  apartmentDTOs: IApartmentDTO[] = [];
  //oneHouse: IHouseDTO = new HouseDTO();

  constructor(
    private HouseDTOService: HouseDTOService,
    private HouseApartmentService: HouseApartmentService,
    private route: ActivatedRoute,
    private ApartmentDtoService: ApartmentDtoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      // const id = params['id'];
      const id = params.get('id');
      //console.log(params['id'], +params['id']);
      if (id) {
        const house = this.HouseDTOService.getOneHouse(+id);
        this.oneHouse = house;
        // this.houseApartments =
        //   this.HouseApartmentService.getSpecialHouseApartment(+id);
        //this.oneHouse.city = house.city;
        this.HouseApartmentService.getSpecialHouseApartment(+id).subscribe(
          (result: IHouseApartment[]) => (this.houseApartments = result)
        );

        this.ApartmentDtoService.getApartmentDTOs().subscribe(
          (result: IApartmentDTO[]) => (this.apartmentDTOs = result)
        );

        this.ApartmentDtoService.getApartmentByHouseIdDTOs(+id).subscribe(
          (result: IApartmentDTO[]) => (this.apartmentDTOsByHouseId = result)
        );
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

  editHouse(house: IHouseDTO) {
    this.houseToEdit = house;
  }

  updateOneHouse(h: IHouseDTO) {
    this.houseToEdit = h;
  }
}
