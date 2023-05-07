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

  toggleShowMeEdit(showMeEdit: boolean): void {
    // //showMeEdit = this.newShowMeEdit.emit(showMeEdit);
    // console.log(showMeEdit, 'I ap pressing show me edit, in EDIT APARTMENT');
    // showMeEdit = !showMeEdit
    // console.log(showMeEdit, 'AFTER ...I ap pressing show me edit, in EDIT APARTMENT');
    // return this.newShowMeEdit.emit(showMeEdit);
    console.log(showMeEdit, 'I ap pressing show me edit, in EDIT APARTMENT');
    //this.apartmentDtoService.toggleOnOfPlease(showMeEdit)
    //.subscribe((showMeEdit: boolean) =>
    //this.newShowMeEdit.emit(showMeEdit);

    this.showMeEdit = !this.showMeEdit;
    this.newShowMeEdit.emit(this.showMeEdit);
    //this.showMeEdit = !this.showMeEdit;

    console.log(
      showMeEdit,
      'AFTER ...I ap pressing show me edit, in EDIT APARTMENT'
    );
  }
}
