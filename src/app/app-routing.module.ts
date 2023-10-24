import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { UpdateVolComponent } from './update-vol/update-vol.component';
import { RechercheParAeroportComponent } from './recherche-par-aeroport/recherche-par-aeroport.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { ListeAeroportsComponent } from './liste-aeroports/liste-aeroports.component';
import { LoginComponent } from './login/login.component';
import { VolGuard } from './vol.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UsersComponent } from './list-users/users/users.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateRoleComponent } from './update-role/update-role.component';


const routes: Routes = [
  {path: "vols", component : VolsComponent},
  {path: "add-vol", component : AddVolComponent},
  { path: "", redirectTo: "vols", pathMatch: "full" },
  { path: 'updateVol/:id', component: UpdateVolComponent },
  {path: "rechercheParAeroport", component : RechercheParAeroportComponent},
  {path: "rechercheParDestination", component : RechercheParDestinationComponent},
  {path: "listeAeroports", component : ListeAeroportsComponent},
  {path: 'login', component: LoginComponent},
  {path: "add-produit", component : AddVolComponent,canActivate:[VolGuard]},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'users', component: UsersComponent},
  { path: 'register', component: SignupComponent },
  { path: 'updateRole/:username', component: UpdateRoleComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
