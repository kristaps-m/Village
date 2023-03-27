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

@NgModule({
  declarations: [AppComponent, EditHouseComponent, HouseComponent, AllHousesComponent, AllApartmentsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
