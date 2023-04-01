import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IInhabitantDTO } from 'src/app/models/InhabitantDTO';
import { InhabitantDtoService } from 'src/app/services/inhabitant-dto.service';

@Component({
  selector: 'app-edit-inhabitant',
  templateUrl: './edit-inhabitant.component.html',
  styleUrls: ['./edit-inhabitant.component.css'],
})
export class EditInhabitantComponent {
  @Input() inhabitant?: IInhabitantDTO;
  @Output() inhabitantUpdated = new EventEmitter<IInhabitantDTO>();
  constructor(private inhabitantDtoService: InhabitantDtoService) {}
  updateInhabitant(inhabitant: IInhabitantDTO) {
    this.inhabitantDtoService
      .updateInhabitantDTOs(inhabitant)
      .subscribe((inhabitant: IInhabitantDTO) =>
        this.inhabitantUpdated.emit(inhabitant)
      );
  }

  deleteInhabitant(inhabitant: IInhabitantDTO) {
    this.inhabitantDtoService
      .deleteInhabitantDTOs(inhabitant)
      .subscribe((inhabitant: IInhabitantDTO) =>
        this.inhabitantUpdated.emit(inhabitant)
      );
  }

  createApartment(inhabitant: IInhabitantDTO) {
    this.inhabitantDtoService
      .createInhabitantDTOs(inhabitant)
      .subscribe((inhabitant: IInhabitantDTO) =>
        this.inhabitantUpdated.emit(inhabitant)
      );
  }
}
