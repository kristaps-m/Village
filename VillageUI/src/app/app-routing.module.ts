import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllApartmentsComponent } from './components/all-apartments/all-apartments.component';
import { AllHousesComponent } from './components/all-houses/all-houses.component';
import { HouseComponent } from './components/house/house.component';

const routes: Routes = [
  { path: ``, redirectTo: 'all-houses', pathMatch: 'full' },
  { path: `all-houses`, component: AllHousesComponent },
  { path: `house/:id`, component: HouseComponent },
  { path: `test`, component: AllApartmentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
