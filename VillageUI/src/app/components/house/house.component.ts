import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HouseDTO, IHouseDTO } from 'src/app/models/HouseDTO';
import { HouseDTOService } from 'src/app/services/house-dto.service';
import { HouseApartmentService } from '../../services/house-apartment.service';
import { IHouseApartment } from 'src/app/models/HouseApartment';
import { ApartmentDTO, IApartmentDTO } from 'src/app/models/ApartmentDTO';
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
  showMeEdit: boolean = false;
  apartmentToEdit?: IApartmentDTO;

  constructor(
    private HouseDTOService: HouseDTOService,
    private HouseApartmentService: HouseApartmentService,
    private route: ActivatedRoute,
    private ApartmentDtoService: ApartmentDtoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        const house = this.HouseDTOService.getOneHouse(+id);
        this.oneHouse = house;
        this.HouseApartmentService.getSpecialHouseApartment(+id).subscribe(
          (result: IHouseApartment[]) => (this.houseApartments = result)
        );

        this.ApartmentDtoService.getApartmentDTOs().subscribe(
          (result: IApartmentDTO[]) => (this.apartmentDTOs = result)
        );

        this.ApartmentDtoService.getApartmentByHouseIdDTOs(+id).subscribe(
          (result: IApartmentDTO[]) => (this.apartmentDTOsByHouseId = result)
        );
      }
    });
  }

  initNewApartment() {
    this.apartmentToEdit = new ApartmentDTO();
  }

  editHouse(house: IHouseDTO) {
    this.houseToEdit = house;
  }

  updateOneHouse(h: IHouseDTO) {
    this.houseToEdit = h;
  }

  updateOneApartment(a: IApartmentDTO) {
    this.apartmentToEdit = a;
  }

  toggleShowMeEdit(): void {
    this.showMeEdit = !this.showMeEdit;
    //console.log(this.showMeEdit, 'I ap pressing show me edit, in >APARTMENT<');
  }
}
