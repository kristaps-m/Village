import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApartmentDTO } from 'src/app/models/ApartmentDTO';
import { IHouseApartment } from 'src/app/models/HouseApartment';
import { ApartmentDtoService } from 'src/app/services/apartment-dto.service';
import { HouseApartmentService } from 'src/app/services/house-apartment.service';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css'],
})
export class EditApartmentComponent {
  @Input() apartment?: IApartmentDTO;
  @Output() apartmentUpdated = new EventEmitter<IApartmentDTO>();

  @Input() houseApartment?: IHouseApartment; // DELETE ME!!!
  @Output() houseApartmentUpdated = new EventEmitter<IHouseApartment>(); // DELETE ME!!!

  @Input() showMeEdit?: boolean;
  @Output() newShowMeEdit = new EventEmitter<boolean>();
  theHouseId?: number = 0;

  constructor(
    private apartmentDtoService: ApartmentDtoService,
    private houseApartmentService: HouseApartmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.theHouseId = +id;
      }
    });
  }

  updateApartment(apartment: IApartmentDTO) {
    this.apartmentDtoService.updateApartmentDTOs(apartment).subscribe(
      (apartment: IApartmentDTO) => {
        alert(
          `Apartment with number '${apartment.number}' updated successfully!`
        );
        this.apartmentUpdated.emit(apartment);
      },
      (error) => {
        alert(`Failed to update apartment! Error: ${error.message}`);
      }
    );
  }

  deleteApartment(apartment: IApartmentDTO) {
    this.apartmentDtoService
      .deleteApartmentDTOs(apartment)
      .subscribe((apartment: IApartmentDTO) =>
        this.apartmentUpdated.emit(apartment)
      );
  }

  // ALERT DOES NOT WORK FOR NOW
  deleteApartmentAndHouseApartment(apartment: IApartmentDTO) {
    this.apartmentDtoService
      .deleteApartmentAndHouseApartmentDTOs(apartment)
      .subscribe(
        (apartment: IApartmentDTO) => {
          alert(
            `ALERT DOES NOT WORK FOR NOW Apartment with number '${apartment.number}' DELETED successfully!`
          );
          this.apartmentUpdated.emit(apartment);
        },
        (error) => {
          alert(
            `ALERT DOES NOT WORK FOR NOW Failed to DELETE apartment! Error: ${error.message}`
          );
        }
      );
  }

  // DELETE ME!!!
  deleteHouseApartment(houseApartment: IHouseApartment) {
    this.houseApartmentService
      .deleteHouseApartmentDTOs(houseApartment)
      .subscribe((houseApartment: IHouseApartment) =>
        this.houseApartmentUpdated.emit(houseApartment)
      );
  }

  createApartment(apartment: IApartmentDTO) {
    this.apartmentDtoService
      .createApartmentDTOs(apartment)
      .subscribe((apartment: IApartmentDTO) =>
        this.apartmentUpdated.emit(apartment)
      );
  }

  createApartmentAndHouseApartment(
    apartment: IApartmentDTO,
    theHouseId: number
  ) {
    this.apartmentDtoService
      .createApartmentInsideHouse(apartment, theHouseId)
      .subscribe((apartment: IApartmentDTO) =>
        this.apartmentUpdated.emit(apartment)
      );
  }
}
