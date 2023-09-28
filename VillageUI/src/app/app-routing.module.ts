import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllApartmentsComponent } from './components/all-apartments/all-apartments.component';
import { AllHousesComponent } from './components/all-houses/all-houses.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { HouseComponent } from './components/house/house.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: ``, redirectTo: 'all-houses', pathMatch: 'full' },
  {
    path: `all-houses`,
    component: AllHousesComponent,
    canActivate: [AuthGuard],
  },
  { path: `house/:id`, component: HouseComponent, canActivate: [AuthGuard] },
  {
    path: `apartment/:id`,
    component: ApartmentComponent,
    canActivate: [AuthGuard],
  },
  { path: `test`, component: AllApartmentsComponent, canActivate: [AuthGuard] },
  { path: `register`, component: RegisterComponent },
  { path: `login`, component: LoginComponent },
  { path: `about`, component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
