import { Component } from '@angular/core';
import { IApartmentDTO } from 'src/app/models/ApartmentDTO';
import { ApartmentDtoService } from '../../services/apartment-dto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-apartments',
  templateUrl: './all-apartments.component.html',
  styleUrls: ['./all-apartments.component.css'],
})
export class AllApartmentsComponent {
  apartmentDTOs: IApartmentDTO[] = [];

  constructor(
    private ApartmentDtoService: ApartmentDtoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ApartmentDtoService.getApartmentDTOs().subscribe(
      (result: IApartmentDTO[]) => (this.apartmentDTOs = result)
    );
  }
}
