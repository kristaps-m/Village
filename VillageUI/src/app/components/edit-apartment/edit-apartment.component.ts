import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IApartmentDTO } from 'src/app/models/ApartmentDTO';
import { ApartmentDtoService } from 'src/app/services/apartment-dto.service';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css'],
})
export class EditApartmentComponent {
  @Input() apartment?: IApartmentDTO;
  @Output() apartmentUpdated = new EventEmitter<IApartmentDTO>();

  @Input() showMeEdit?: boolean;
  @Output() newShowMeEdit = new EventEmitter<boolean>();

  constructor(private apartmentDtoService: ApartmentDtoService) {}

  updateApartment(apartment: IApartmentDTO) {
    this.apartmentDtoService
      .updateApartmentDTOs(apartment)
      .subscribe((apartment: IApartmentDTO) =>
        this.apartmentUpdated.emit(apartment)
      );
  }

  deleteApartment(apartment: IApartmentDTO) {
    this.apartmentDtoService
      .deleteApartmentDTOs(apartment)
      .subscribe((apartment: IApartmentDTO) =>
        this.apartmentUpdated.emit(apartment)
      );
  }

  createApartment(apartment: IApartmentDTO) {
    this.apartmentDtoService
      .createApartmentDTOs(apartment)
      .subscribe((apartment: IApartmentDTO) =>
        this.apartmentUpdated.emit(apartment)
      );
  }
}
