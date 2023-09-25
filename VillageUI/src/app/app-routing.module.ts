import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllApartmentsComponent } from './components/all-apartments/all-apartments.component';
import { AllHousesComponent } from './components/all-houses/all-houses.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { HouseComponent } from './components/house/house.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: ``, redirectTo: 'all-houses', pathMatch: 'full' },
  { path: `all-houses`, component: AllHousesComponent },
  { path: `house/:id`, component: HouseComponent },
  { path: `apartment/:id`, component: ApartmentComponent },
  { path: `test`, component: AllApartmentsComponent },
  { path: `register`, component: RegisterComponent },
  { path: `login`, component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
