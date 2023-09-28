import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditHouseComponent } from './components/edit-house/edit-house.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HouseComponent } from './components/house/house.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllHousesComponent } from './components/all-houses/all-houses.component';
import { AllApartmentsComponent } from './components/all-apartments/all-apartments.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditApartmentComponent } from './components/edit-apartment/edit-apartment.component';
import { EditInhabitantComponent } from './components/edit-inhabitant/edit-inhabitant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AboutComponent } from './components/about/about.component';

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
    RegisterComponent,
    LoginComponent,
    AboutComponent,
  ], // ModalComponent
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
