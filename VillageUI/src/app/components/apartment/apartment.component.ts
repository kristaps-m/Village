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
  // template: `<h3>toggle state: {{ boolshow }}</h3>
  //   <child [state]="boolshow" (toggle)="boolshow = $event"></child> //<<<===
  //   here we have set parent relation with child component `,
})
export class ApartmentComponent {
  oneApartment: Observable<IApartmentDTO> | undefined;
  inhabitantDTOsByApartmentId: IInhabitantDTO[] = [];
  apartmentToEdit?: IApartmentDTO;
  inhabitantToEdit?: IInhabitantDTO;
  showMeEdit: boolean = false;
  //showMeEditToEdit?: boolean;

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
      }
    });
  }

  editApartment(apartment: IApartmentDTO) {
    this.apartmentToEdit = apartment;
  }

  editInhabitant(i: IInhabitantDTO) {
    this.inhabitantToEdit = i;
  }

  updateOneApartment(a: IApartmentDTO) {
    this.apartmentToEdit = a;
  }

  updateOneInhabitant(i: IInhabitantDTO) {
    this.inhabitantToEdit = i;
  }

  test(): void {
    console.log('This is test function');
  }

  toggleShowMeEdit(): void {
    this.showMeEdit = !this.showMeEdit;
    console.log(this.showMeEdit, 'I ap pressing show me edit, in >APARTMENT<');
  }

  showBoolean(): void {
    console.log(this.showMeEdit, 'current showMeEdit status!');
  }
}
