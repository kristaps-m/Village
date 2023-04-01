import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditHouseComponent } from './components/edit-house/edit-house.component';
import { FormsModule } from '@angular/forms';
import { HouseComponent } from './components/house/house.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllHousesComponent } from './components/all-houses/all-houses.component';
import { AllApartmentsComponent } from './components/all-apartments/all-apartments.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditApartmentComponent } from './components/edit-apartment/edit-apartment.component';
import { EditInhabitantComponent } from './components/edit-inhabitant/edit-inhabitant.component';

@NgModule({
  declarations: [
    AppComponent,
    EditHouseComponent,
    HouseComponent,
    AllHousesComponent,
    AllApartmentsComponent,
    ApartmentComponent,
    EditApartmentComponent,
    EditInhabitantComponent,
  ], // ModalComponent
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
