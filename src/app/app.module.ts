import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { FormsModule } from '@angular/forms';
import { UpdateVolComponent } from './update-vol/update-vol.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParAeroportComponent } from './recherche-par-aeroport/recherche-par-aeroport.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeAeroportsComponent } from './liste-aeroports/liste-aeroports.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { UsersComponent } from './list-users/users/users.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateRoleComponent } from './update-role/update-role.component';


@NgModule({
  
  declarations: [
    AppComponent,
    VolsComponent,
    AddVolComponent,
    UpdateVolComponent,
    RechercheParAeroportComponent,
    RechercheParDestinationComponent,
    SearchFilterPipe,
    ListeAeroportsComponent,
    UpdateCategorieComponent,
    LoginComponent,
    ForbiddenComponent,
    UsersComponent,
    SignupComponent,
    UpdateUserComponent,
    UpdateRoleComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
