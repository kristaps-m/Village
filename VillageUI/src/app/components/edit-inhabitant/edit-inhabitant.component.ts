import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  theApartmentId: number = 0;
  isOwner: boolean = false;

  constructor(
    private inhabitantDtoService: InhabitantDtoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.theApartmentId = +id;
      }
    });
  }

  updateInhabitant(inhabitant: IInhabitantDTO) {
    this.inhabitantDtoService.updateInhabitantDTOs(inhabitant).subscribe(
      (updatedInhabitant: IInhabitantDTO) => {
        alert(
          `Inhabitant with name '${inhabitant.name}' updated successfully!`
        );
        this.inhabitantUpdated.emit(updatedInhabitant);
      },
      (error) => {
        alert(`Failed to update inhabitant! Error: ${error.message}`);
      }
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

  createInhabitantAndApartmentInhabitant(
    inhabitant: IInhabitantDTO,
    theApartmentId: number
  ) {
    this.inhabitantDtoService
      .createInhabitantInsideApartment(inhabitant, theApartmentId)
      .subscribe((inhabitant: IInhabitantDTO) =>
        this.inhabitantUpdated.emit(inhabitant)
      );
  }

  toggleIsOwner() {
    this.isOwner = !this.isOwner;
  }
}
